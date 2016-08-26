import React from 'react';
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
            viewProjects: []
        }

        this._getProjects();
    }

    handlerFilter = (e) => {
        console.log(e.target);
    }

    handlerMoreProjectsBtn = (e) => {
        e.preventDefault();
        const newProjects = this.state.projects.slice(0, this.state.viewProjects.length + this.props.defaultAmountViewProjects);

        this.setState({
            viewProjects: newProjects,
            isShowMoreProjectsBtn: (newProjects.length < this.state.projects.length)
        });
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
                    <h2 className='section__header section__header--portfolio'>Our works</h2>
                    <div className="portfolio__filter">
                        {
                            this.props.filterItems.map((item, index) =>
                                <div
                                    key={index}
                                    className={`portfolio__filter-item portfolio__filter-item--${item}`}
                                    data-item={item}
                                    onClick={this.handlerFilter}
                                />
                            )
                        }
                    </div>
                    <PortfolioGallery
                        defaultAmountViewProjects={10}
                        viewProjects={this.state.viewProjects}
                    />
                    <div className={`portfolio__see-more-btn ${(this.state.isShowMoreProjectsBtn) ? 'portfolio__see-more-btn--show' : ''}`}>
                        <div className="portfolio__more-hexagon"></div>
                        <a
                            className="action-btn action-btn--portfolio-more"
                            href="#"
                            onClick={this.handlerMoreProjectsBtn}
                        >
                            See more projects
                        </a>
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
