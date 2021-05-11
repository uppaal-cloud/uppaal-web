import { useState, useEffect } from 'react';

export default function useFindUser() {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        function findUser() {
            console.error('FIND USER');
            const usr = JSON.parse(localStorage.getItem('user')!);

            if (usr) setUser(usr);
            setLoading(false);
        }
        findUser();
    }, []);
    return {
        user,
        setUser,
        isLoading,
    };
}
