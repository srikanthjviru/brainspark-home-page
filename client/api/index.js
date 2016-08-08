import axios from 'axios';

import { server } from '../../etc/config.json';

export default {
    getTechnologies() {
        return axios.get(`${server.host}:${server.port}/technologies`);
    }

    // createNote(data) {
    //     return axios.post(`${apiPrefix}/notes`, data);
    // },
    //
    // deleteNote(noteId) {
    //     return axios.delete(`${apiPrefix}/notes/${noteId}`);
    // }
}
