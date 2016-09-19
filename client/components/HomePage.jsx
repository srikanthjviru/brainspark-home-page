import React from 'react';

import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';

class HomePage extends React.Component {

    render() {
        return(
            <div>
                <WhoWeAre />
                <WhatWeDo />
                <Portfolio />
            </div>
        )
    }
}

export default HomePage;
