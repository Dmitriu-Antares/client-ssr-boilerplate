import { combineReducers } from 'redux';
import main from './containers/Main/redux/reducer'
import global from './containers/App/redux/reducer'

const rootReducer =
    combineReducers({
        main,
        global,
    })

export default rootReducer