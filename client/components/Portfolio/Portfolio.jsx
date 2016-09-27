import React from 'react';
import Hexagon from 'react-hexagon';
import moreHexagonImage from '../../img/hexagon-more-see-btn.png';
import PortfolioGallery from './PortfolioGallery.jsx';
import api from '../../api';

import './Portfolio.less';

class Portfolio extends React.Component {
    static defaultProps = {
        filterItems: ['desktop', 'web', 'mobile'],
        defaultAmountViewProjects: 10
    }

    constructor(props) {
        super(props);

        this.state = {
            isShowMoreProjectsBtn: false,
            projects: [],
            viewProjects: [],
            currentFilter: ''
        }

        this._getProjects();
    }

    handlerFilter = (e) => {
        const data = e.target.getAttribute('data-item');
        if(!this.handlerFilter.projects) {
            this.handlerFilter.projects = this.state.viewProjects.slice();
        }
        const newProjects = this.handlerFilter.projects.filter(function(el) {
            if(el.platforms.indexOf(data) + 1) {
                return el;
            }
        });

        this.setState({
            viewProjects: newProjects,
            currentFilter: data
        });
    }

    handlerMoreProjectsBtn = (e) => {
        e.preventDefault();
        const newProjects = this.state.projects.slice(0, this.state.viewProjects.length + this.props.defaultAmountViewProjects);

        this.setState({
            viewProjects: newProjects,
            isShowMoreProjectsBtn: (newProjects.length < this.state.projects.length)
        });

        this.handlerFilter.projects = null;
    }

    checkAmountProjects = () => {
        this.setState({
            isShowMoreProjectsBtn: (this.state.viewProjects.length < this.state.projects.length)
        });
    }

    render() {
        return(
            <section className='section portfolio'>
                <div className='portfolio__body'>
                    <a className="action-btn action-btn--portfolio-send" href="#">Send the Project</a>
                    <h2 id="portfolio"  className='section__header section__header--portfolio'>Our works</h2>
                    <div className="platforms platforms--portfolio">
                        {
                            this.props.filterItems.map((item, index) => {
                                let activeClassName = '';
                                if(this.state.currentFilter === item) {
                                    activeClassName = `platforms__item--${item}-active`
                                }

                                return <div
                                            key={index}
                                            className={`platforms__item platforms__item--${item} ${activeClassName}`}
                                            data-item={item}
                                            onClick={this.handlerFilter}
                                            title={item}
                                        />
                            })
                        }
                    </div>
                    <PortfolioGallery
                        defaultAmountViewProjects={10}
                        viewProjects={this.state.viewProjects}
                    />
                    <div className={`portfolio__see-more-btn ${(this.state.isShowMoreProjectsBtn) ? 'portfolio__see-more-btn--show' : ''}`}>
                        <Hexagon
                            className='portfolio__more-hexagon'
                            style={{stroke: 'transparent', strokeWidth: 0}}
                            backgroundImage={moreHexagonImage}
                         >
                             <span
                                 className="action-btn action-btn--portfolio-more"
                                 onClick={this.handlerMoreProjectsBtn}
                             >
                                 See more projects
                             </span>
                         </Hexagon>
                    </div>
                </div>
            </section>
        )
    }

    _getProjects = () => {
        const that = this;

        api.getProjects((err, data) => {
            if(err) return console.log(err);

            const viewProjects = data.slice(0, this.props.defaultAmountViewProjects);

            that.setState({
                projects: data,
                viewProjects: viewProjects,
                isShowMoreProjectsBtn: (viewProjects.length < data.length)
            });

            that.checkAmountProjects();
        })
    }
}

export default Portfolio;
