const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../etc/config.json');

const technologiesData = require('./data/technologies.json');
const projectsData = require('./data/projects.json');

// Initialization of express application
const app = express();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/technologies', (req, res) => {
    res.json(technologiesData);
});
app.get('/projects', (req, res) => {
    res.json(projectsData);
});
app.get('/projects/:projectID', (req, res) => {
    const projectID = parseInt(req.params.projectID, 10);
    const project = projectsData.find(project => projectID === project.id);

    res.json(project);
});




const server = app.listen(config.server.port, () => {
    console.log(`Server is up and running on port ${config.server.port}`);
});
