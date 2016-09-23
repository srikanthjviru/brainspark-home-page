import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import './styles/main.less';
import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home" />
            <Route path="home" component={HomePage} />
            <Route path="projects/:projectID" component={ProjectPage} />
        </Route>
    </Router>,
    document.getElementById('main')
);
