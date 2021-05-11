import axios from 'axios';

// const API_URL = 'http://uppaal.mywire.org/';

const login = (email: string, password: string): any => {
    return axios
        .post('/auth/login', {
            email,
            password,
        })
        .then((response) => {
            if (response.status === 200 && response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const register = (email: string, password: string): any => {
    return axios.post('/auth/signup', { email, password }).then((res) => {
        console.log(res);
    });
};

const getCurrentUser = (): any => {
    return JSON.parse(localStorage.getItem('user')!);
};

const logout = () => {
    localStorage.clear();
};
export default { register, logout, getCurrentUser };
