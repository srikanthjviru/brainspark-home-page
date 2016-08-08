import React from 'react';
import api from '../api';

import './WhatWeDo.less';

class WhatWeDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: []
        }

        this._getTechnologies();
    }

    render() {
        return(
            <section className='section what-we-do'>
                <div className='what-we-do__body'>
                    <h2 className='section__header section__header--what-we-do'>What we do?</h2>
                    <div className='what-we-do__description'>
                        <div className='technologies technologies--what-we-do'>
                            {
                                this.state.technologies.map((technology, index) =>
                                    <div className='technologies__item' key={index}>
                                        <div className='technologies__item-icon'>
                                            <img src={`/static/technologies/${technology.img}`} alt={`${technology.name}-icon`} />
                                        </div>
                                        <div className='technologies__item-name'>
                                            {technology.name}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    _getTechnologies = () => {
        const that = this;

        api.getTechnologies((err, data) => {
            if(err) return console.log(err);

            that.setState({
                technologies: data
            });
        })
    }
}

export default WhatWeDo;
