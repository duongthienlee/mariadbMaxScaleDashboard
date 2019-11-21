import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Layout from '../layout'

const PrivateRoute = ({ component: Component, history, isAuth, ...rest }) =>

    <Route {...rest} render={props => (
        isAuth ?
            <Layout>
                <Component {...props} />
            </Layout>
            : <Redirect to="/login" />
    )} />

export default PrivateRoute