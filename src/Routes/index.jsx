import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Overview from 'pages/Overview'

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Overview} />
        </Switch>
    </BrowserRouter>

export default Routes