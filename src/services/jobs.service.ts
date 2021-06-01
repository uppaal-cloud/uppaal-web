import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth.service';

const fetchJobs = (user: any) => {
    const localUser = JSON.parse(localStorage.getItem('user')!);

    if (!localUser) return;

    return axios
        .get('/job', { headers: authHeader(user) })
        .then((response) => {
            return response.data.reverse();
        })
        .catch((err) => {
            console.log(err);

            if (err.response.status === 401) {
                authService.logout();
                window.location.reload();
            }
        });
};

const sumbitJob = (name: string, description: string, xml: string, options: any) => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const requestParams = {
        name: name,
        description: description,
        xml: xml,
        options,
    };

    if (!user) return;

    return axios
        .post('/job', requestParams, { headers: authHeader(user) })
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            if (e.response.status) {
                authService.logout();
                window.location.reload();
            }
        });
};

export default { fetchJobs, sumbitJob };
