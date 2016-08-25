import axios from 'axios';
import { server } from '../../etc/config.json';

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
    }
}
