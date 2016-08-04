import React from 'react';
import Hexagon from 'react-hexagon'

import './WhoWeAre.less';

class App extends React.Component {
    render() {
        return(
            <section className='section who-we-are'>
                <div className='who-we-are__video'></div>
                <div className='who-we-are__body'>
                    <div className='slogan slogan--who-we-are'>We can help you promote your business</div>
                    <h2 className='who-we-are__header'>Who we are?</h2>
                    <div className='who-we-are__description'>
                        <p>
                            We are a team of web professionals working together to create, launch and maintain your online presence succesfully. We specialize in custom web site development and design as well as setup and customization of popular Open Source solutions.
                        </p>
                        <p>
                            We are a team of web professionals working together to create, launch and maintain your online presence succesfully. We specialize in custom web site development and design as well as setup and customization of popular Open Source solutions.
                        </p>
                    </div>
                    <Hexagon
                        className='who-we-are__hexagon'
                        style={{fill: '#fff', stroke: 'transparent', strokeWidth: 0}}
                    />
                </div>
            </section>
        )
    }
}

export default App;
