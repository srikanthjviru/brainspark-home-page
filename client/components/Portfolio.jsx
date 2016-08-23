import React from 'react';

import './Portfolio.less';

class Portfolio extends React.Component {
    static defaultProps = {
        filterItems: ['desktop', 'web', 'mobile']
    }

    render() {
        return(
            <section className='section portfolio'>
                <div className='portfolio__body'>
                    <a className="action-btn action-btn--portfolio" href="#">Send the Project</a>
                    <h2 className='section__header section__header--portfolio'>Our works</h2>
                    <div className="portfolio__filter">
                        {
                            this.props.filterItems.map((item, index) =>
                                <div
                                    key={index}
                                    className={`portfolio__filter-item portfolio__filter-item--${item}`}
                                    data-item={item}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;
