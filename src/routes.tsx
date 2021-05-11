import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './components/Jobs';
import NotFound from './components/NotFound';
import FileDropzone from './components/FileDropzone';
import { UserContext } from './hooks/UserContext';
import useFindUser from './hooks/useFindUser';
import PrivateRoute from './components/PrivateRoute';

function Routes() {
    const { user, setUser, isLoading } = useFindUser();
    console.log(user);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            <BrowserRouter>
                <Route
                    render={(props) => (
                        <Root {...props} style={{ backgroud: 'red' }}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/dashboard" exact component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <PrivateRoute path="/jobs" component={Jobs} />
                                <PrivateRoute path="/new-job" component={FileDropzone} />

                                <Route component={NotFound} />
                            </Switch>
                        </Root>
                    )}
                />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default Routes;
