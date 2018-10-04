import { combineReducers } from 'redux';
import blockchains from './containers/Blockchains/redux/reducer'
import global from './containers/Header/redux/reducer'

const rootReducer =
    combineReducers({
        blockchains,
        global,
    })

export default rootReducer