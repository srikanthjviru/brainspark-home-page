import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from '../etc/config.json';

import technologiesData from './data/technologies.json';

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


const server = app.listen(config.server.port, () => {
    console.log(`Server is up and running on port ${config.server.port}`);
});
