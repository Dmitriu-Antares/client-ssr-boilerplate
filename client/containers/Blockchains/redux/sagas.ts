import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { Blockchains } from '../types'

import { getBlockchains } from '../../../api'


import {
    fetchBlockchains
} from './actions';

function* fetchBlockchainsList( action: Action<null> ) {
    try {
        const {err, data} = yield call(getBlockchains);
        if(err) throw new Error(err)
        if(!err) yield put(fetchBlockchains.done(data))
    } catch (error) {
        console.log(error)
    }
}

const blockchainsSaga = function* fetchGistsSaga() {
    yield takeLatest(fetchBlockchains.started, fetchBlockchainsList);
}

export default blockchainsSaga