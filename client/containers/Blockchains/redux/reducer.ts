import { reducerWithInitialState } from "typescript-fsa-reducers";
import { fetchBlockchains } from './actions'
import { ReduxState } from '../types'



const initialState:ReduxState = {
    blockchains: [],
};

const blockchians = reducerWithInitialState(initialState)
    .case(fetchBlockchains.done, (state, data) => ({...state, blockchains: data}))

export default blockchians