import React from 'react';

import WhoWeAre from './WhoWeAre.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import SendProjectPopup from './SendProjectPopup.jsx';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowSendProjectPopup: false,
        }
    }

    handlerSendAction = (e) => {
        e.stopPropagation();
        e.preventDefault();

        this.setState({
            isShowSendProjectPopup: true
        });
    }

    handlerCloseProjectPopup = () => {
        this.setState({
            isShowSendProjectPopup: false
        });
    }

    render() {
        return(
            <div>
                <WhoWeAre />
                <WhatWeDo />
                <Portfolio handlerSendAction={this.handlerSendAction} />
                <SendProjectPopup
                    isShow={this.state.isShowSendProjectPopup}
                    handlerClosePopup={this.handlerCloseProjectPopup}
                />
            </div>
        )
    }
}

export default HomePage;
