import { combineReducers } from 'redux';
import main from './containers/Main/redux/reducer'

const rootReducer =
    combineReducers({
        main
    })

export default rootReducer