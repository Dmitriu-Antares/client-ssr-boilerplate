import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { Blockchains } from '../types'

import { getBlockchains } from '../../../api'


import {
    fetchBlockchains
} from './actions';

function* fetchBlockchainsList( action: Action<null> ) {
    try {
        const fetchBlockchainList = yield call(getBlockchains);
        console.log(fetchBlockchainList)
        /*
        yield put(fetchBlockchains.done({
            params: action.payload,
            result: gists
        }));
        */
    } catch (error) {
        // console.log(error)
    }
}

const blockchainsSaga = function* fetchGistsSaga() {
    yield takeLatest(fetchBlockchains.started, fetchBlockchainsList);
}

export default blockchainsSaga