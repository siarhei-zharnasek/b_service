import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../../../store';
import { About } from '../../../pages/About';
import { Home } from '../../../pages/Home';

const Router: React.FC = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <ul>
                <li><Link to={`${url}`}>Billing Home</Link></li>
                <li><Link to={`${url}/about`}>About Billing</Link></li>
            </ul>
            <Provider store={store}>
                <Switch>
                    <Route path={path} component={Home} exact />
                    <Route path={`${path}/about`} component={About} exact />
                </Switch>
            </Provider>
        </>
    );
};

export default Router;
