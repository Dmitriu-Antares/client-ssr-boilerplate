import { reducerWithInitialState } from "typescript-fsa-reducers";

import { fetchGists } from './actions'


const initialState = [];

const main = reducerWithInitialState(initialState)
    .case(fetchGists.done, (state, { gists }:any) => ({...state, gists}))

export default main