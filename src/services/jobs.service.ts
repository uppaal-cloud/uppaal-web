import axios from 'axios';
import authHeader from './auth-header';

const fetchJobs = (user: any) => {
    const localUser = JSON.parse(localStorage.getItem('user')!);

    if (!localUser) return;

    return axios.get('/job', { headers: authHeader(user) }).then((response) => {
        return response.data.reverse();
    });
};

const sumbitJob = (name: string, description: string, xml: string) => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const requestParams = {
        name: name,
        description: description,
        xml: xml,
    };

    if (!user) return;

    return axios.post('/job', requestParams, { headers: authHeader(user) }).then((response) => {
        return response.data;
    });
};

export default { fetchJobs, sumbitJob };
