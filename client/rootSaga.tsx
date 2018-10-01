import { all } from 'redux-saga/effects'
import mainSaga from './containers/Main/redux/sagas'
import globalSaga from './containers/App/redux/sagas'

export default function* root() {
    yield all([globalSaga(), mainSaga()])
}
