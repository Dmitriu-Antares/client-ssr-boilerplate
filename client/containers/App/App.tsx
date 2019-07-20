import * as React from 'react'
import { Blockchains, Blockchain, Main } from '../../containers'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'

/* all styles imports here for server side rendering of a postcss */

import '../../components/Button/styles/Button.css'
import '../../components/BlockchainModal/styles/BlockchainModal.css'
import '../../containers/Header/styles/Header.css'
import '../../containers/Blockchains/styles/Blockchains.css'
import '../../containers/Blockchain/styles/Blockchain.css'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/blockchains" component={Blockchains} />
            <Route path="/:id" component={Blockchain} />
        </Switch>
    </div>
)

export default App
