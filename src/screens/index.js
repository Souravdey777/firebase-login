import Login from './login'
import Home from './home'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTES } from '../utils/routes'

const EntryPoint = () => {
    return (
        <Switch>
            <Route path={ROUTES.HOME_PAGE} exact component={Home} />
            <Route path={ROUTES.LOGIN_PAGE} component={Login} />
        </Switch>
    )
}

export default EntryPoint
