import React from 'react';
import Hexagon from 'react-hexagon';
import dotsTextureImg from '../img/dots-texture.jpg';

import './Portfolio.less';

class Portfolio extends React.Component {
    render() {
        return(
            <section className='section portfolio'>
                <div className='portfolio__body'>
                    
                </div>
                <Hexagon
                    className='portfolio__decoration-hexagon'
                    style={{fill: '#D93F42', stroke: 'transparent', strokeWidth: 0}}
                />
            </section>
        )
    }
}

export default Portfolio;
