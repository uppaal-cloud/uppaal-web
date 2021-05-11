import { Spinner } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './../hooks/UserContext';
// import Loading from './../components/Loading';
export default function PrivateRoute(props: any) {
    const { _, isLoading } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user')!);

    const { component: Component, ...rest } = props;
    if (isLoading) {
        console.log('loading');

        return <Spinner />;
    }
    if (user) {
        console.log(user);

        return <Route {...rest} render={(props) => <Component {...props} />} />;
    }

    console.log(user);

    console.log('no user -> sign in');

    //redirect if there is no user
    return <Redirect to="/login" />;
}
