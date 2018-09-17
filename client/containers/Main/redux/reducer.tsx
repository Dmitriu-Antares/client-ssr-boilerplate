import { reducerWithInitialState } from "typescript-fsa-reducers";

import { fetchGists } from './actions'


const initialState = [];

const main = reducerWithInitialState(initialState)
    .case(fetchGists.done, (state, { result }) => ({...state, gists: result}))

export default main