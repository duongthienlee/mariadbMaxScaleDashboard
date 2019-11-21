import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { useSelector } from 'react-redux'

const App = () => {
    const { isLoggedIn, token } = useSelector(state => state.auth)
    console.log("token", token)
    let inMemoryToken = localStorage.token // fakeToken
    // check if user is already login or have inMemoryToken, for the sake of simplicity, here is a Fake Token
    const isAuth = isLoggedIn || inMemoryToken

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