import * as React from 'react'
import { Blockchains, Blockchain } from '../../containers'
import { Route, Switch } from 'react-router-dom';
import Header from '../Header'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route
                path="/"
                exact
                component={Blockchains}
            />
            <Route
                path="/:id"
                component={Blockchain}
            />
        </Switch>
    </div>
)

export default App