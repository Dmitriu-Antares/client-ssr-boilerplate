import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    fetchGists,
    FETCH_GISTS__FAILED
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

function* fetchGist() {
    try {
        const fetchGistsList = yield call(fetchUrl);
        const gists = fetchGistsList.map(gist => ({
            id: gist.id,
            title: gist.description || 'pas de titre',
        }))

        // @ts-ignore
        yield put(fetchGists.done({ gists }));
    } catch (error) {
        yield put({
            type: FETCH_GISTS__FAILED,
            payload: error,
        });
    }
}

const mainSaga = function* fetchGistsSaga() {
    yield takeEvery(fetchGists.started, fetchGist);
}

export default mainSaga