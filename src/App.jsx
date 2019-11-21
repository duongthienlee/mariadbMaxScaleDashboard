import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import { useSelector } from 'react-redux'

const App = () => {
    const { isLoggedIn, token } = useSelector(state => state.auth)
    let localToken = localStorage.getItem("token")
    // check if user is already login or have localToken, for the sake of simplicity, it is just a fake token
    const isAuth = isLoggedIn || token !== null || localToken !== null

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, i) => (
                    route.isPublic ?
                        <PublicRoute
                            isAuth={isAuth}
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                        :
                        <PrivateRoute
                            isAuth={isAuth}
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                ))}
                <PublicRoute sAuth={isAuth} exact path="/">
                    <Redirect to="/server" />
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default App