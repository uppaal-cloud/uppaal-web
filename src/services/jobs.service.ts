import axios from 'axios';
import authHeader from './auth-header';

const fetchJobs = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    if (!user) return;

    return axios.get('/job', { headers: authHeader() }).then((response) => {
        return response.data;
    });
};

export default { fetchJobs };
