import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, history, isAuth, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isAuth ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};
export default PrivateRoute;