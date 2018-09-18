import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchGists } from './actions'
import { Gists } from '../types'

interface State {
    gists: [Gists] | []
}

const initialState:State = {
    gists: []
};

const main = reducerWithInitialState(initialState)
    .case(fetchGists.done, (state, { result }) => ({...state, gists: result}))

export default main