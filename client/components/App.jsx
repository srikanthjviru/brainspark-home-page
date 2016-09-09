import React from 'react';
import './App.less';

import Header from './Header.jsx';
import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <Header />
                <WhoWeAre />
                <WhatWeDo />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}

export default App;
