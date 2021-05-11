import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFindUser from './useFindUser';
import { UserContext } from './UserContext';

export default function useAuth() {
    let history = useHistory();
    // const { setUser } = useContext(UserContext);
    const { setUser } = useFindUser();
    const [error, setError] = useState('');

    const setUserContext = (user: any) => {
        if (!user) setError('local storage empty');
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));

        history.push('/jobs');
    };

    const login = (email: string, password: string): any => {
        return axios
            .post('/auth/login', {
                email,
                password,
            })
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    setUserContext(response.data);
                    window.location.reload();
                }

                return response.data;
            })
            .catch((err) => {
                setError(err);
            });
    };
    return { login, error };
}
