import React from 'react';
import './App.less';

import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <WhoWeAre />
                <WhatWeDo />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}

export default App;
