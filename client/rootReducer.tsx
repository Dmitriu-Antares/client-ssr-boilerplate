import { combineReducers } from 'redux';
import blockchians from './containers/Main/redux/reducer'
import global from './containers/App/redux/reducer'

const rootReducer =
    combineReducers({
        blockchians,
        global,
    })

export default rootReducer