import axios from 'axios';
import authHeader from './auth-header';

const fetchJobs = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    if (!user) return;

    return axios.get('/job', { headers: authHeader() }).then((response) => {
        return response.data;
    });
};

const sumbitJob = (xml: string) => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const requestParams = {
        name: 'test job',
        description: 'desc',
        xml: xml,
    };

    if (!user) return;

    return axios
        .post('/job', requestParams, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

export default { fetchJobs, sumbitJob };
