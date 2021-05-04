import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './components/Jobs';
import NotFound from './components/NotFound';
// import Layout from './components/Layout';

function Routes() {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <Root {...props}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/dashboard" exact component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/Jobs" component={Jobs} />
                            <Route component={NotFound} />
                        </Switch>
                    </Root>
                )}
            />
        </BrowserRouter>
    );
}

export default Routes;
