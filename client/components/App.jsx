import React from 'react';
import './App.less';

import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';

class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <WhoWeAre />
                <WhatWeDo />
            </div>
        )
    }
}

export default App;
