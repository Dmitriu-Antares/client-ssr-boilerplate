import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { Gists } from '../types'

import { getGists } from '../../../api'


import {
    fetchGists
} from './actions';

function* fetchGist( action: Action<null> ) {
    try {
        const fetchGistsList = yield call(getGists);
        const gists:[Gists] = fetchGistsList.map((gist:Gists) => ({
            id: gist.id,
            description: gist.description || 'pas de titre',
        }))

        yield put(fetchGists.done({
            params: action.payload,
            result: gists
        }));
    } catch (error) {
        // console.log(error)
    }
}

const mainSaga = function* fetchGistsSaga() {
    yield takeLatest(fetchGists.started, fetchGist);
}

export default mainSaga