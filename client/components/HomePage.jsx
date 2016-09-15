import React from 'react';

import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';

class ProjectPage extends React.Component {
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

export default ProjectPage;
