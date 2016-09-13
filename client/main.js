import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Redirect, browserHistory} from 'react-router';

import './styles/main.less';
import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';


ReactDOM.render(
    <Router history={browserHistory}>
        <Redirect from="/" to="home" />
        <Route path="/" component={App}>
            <Route path="/home" component={HomePage} />
            <Route path="/projects/:projectID" component={ProjectPage} />
        </Route>
    </Router>,
    document.getElementById('main')
);
