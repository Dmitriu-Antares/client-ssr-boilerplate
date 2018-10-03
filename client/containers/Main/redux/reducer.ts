import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchBlockchains } from './actions'
import { ReduxState } from '../types'



const initialState:ReduxState = {
    gists: []
};

const blockchians = reducerWithInitialState(initialState)
    .case(fetchBlockchains.done, (state, { result }) => ({...state, blockchains: result}))

export default blockchians