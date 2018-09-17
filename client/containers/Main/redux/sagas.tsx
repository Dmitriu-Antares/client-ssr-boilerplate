import { call, put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { Action } from 'typescript-fsa'

import {
    fetchGists
} from './actions';

const fetchUrl = () => fetch('https://api.github.com/gists', {
    method: 'get',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}).then((response) => {
    if (!response.ok) {
        throw new Error();
    }

    return response.json();
})

function* fetchGist( action: Action<null> ) {
    try {
        const fetchGistsList = yield call(fetchUrl);
        const gists:[{id:number,title:string}] = fetchGistsList.map(gist => ({
            id: gist.id,
            title: gist.description || 'pas de titre',
        }))

        yield put(fetchGists.done({
            params: action.payload,
            result: gists
        }));
    } catch (error) {
        console.log(error)
    }
}

const mainSaga = function* fetchGistsSaga() {
    yield takeEvery(fetchGists.started, fetchGist);
}

export default mainSaga