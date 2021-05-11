import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function useAuth() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('');

    const setUserContext = async (user: any) => {
        if (!user) setError('local storage empty');
        setUser(user);

        history.push('/home');
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
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            })
            .catch((err) => {
                setError(err);
            });
    };
    return { login, error };
}

// export default { login, error };

// export default useAuth;
