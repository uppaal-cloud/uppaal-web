import axios from 'axios';

const fetchJobs = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    return axios
        .get('/job', { headers: { 'x-access-token': user.token } })
        .then((response) => {
            return response.data;
        });
};

export default { fetchJobs };
