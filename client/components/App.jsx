import React from 'react';
import './App.less';

import WhoWeAre from './WhoWeAre.jsx';

class App extends React.Component {
    render() {
        return(
            <div className='App'>
                <WhoWeAre />
            </div>
        )
    }
}

export default App;
