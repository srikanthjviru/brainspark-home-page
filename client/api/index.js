import axios from 'axios';
import config from '../../etc/config.json';
const server = config[config.environment].server;

export default {
    getTechnologies(callback) {
        axios.get(`${server.host}:${server.port}/technologies`)
                .then((res) => {
                    callback(null, res.data);
                })
                .catch((error) => {
                    callback(error);
                });
    },

    getProjects(callback) {
        axios.get(`${server.host}:${server.port}/projects`)
                .then((res) => {
                    callback(null, res.data);
                })
                .catch((error) => {
                    callback(error);
                });
    },

    getProjectByID(projectID, callback) {
        axios.get(`${server.host}:${server.port}/projects/${projectID}`)
                .then((res) => {
                    callback(null, res.data);
                })
                .catch((error) => {
                    callback(error);
                });
    }
}
