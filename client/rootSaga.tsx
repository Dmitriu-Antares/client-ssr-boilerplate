import { all } from 'redux-saga/effects';
import mainSaga from './containers/Main/redux/sagas'

export default function* root() {
    yield all([
        mainSaga(),
    ])
}
