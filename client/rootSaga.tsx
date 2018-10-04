import { all } from 'redux-saga/effects';
import blockchainsSaga from './containers/Blockchains/redux/sagas'
import globalSaga from './containers/Header/redux/sagas'

export default function* root() {
    yield all([
        globalSaga(),
        blockchainsSaga()
    ])
}
