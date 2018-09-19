import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchGists } from './actions'
import { ReduxState } from '../types'



const initialState:ReduxState = {
    gists: []
};

const main = reducerWithInitialState(initialState)
    .case(fetchGists.done, (state, { result }) => ({...state, gists: result}))

export default main