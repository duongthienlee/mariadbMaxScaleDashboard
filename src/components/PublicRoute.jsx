import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, isAuth, ...rest }) =>

    <Route {...rest} render={props => (
        isAuth ?
            <Redirect to="/server" />
            : <Component {...props} />
    )} />

export default PublicRoute