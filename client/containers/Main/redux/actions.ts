import actionCreatorFactory from 'typescript-fsa';
import { Blockchains } from '../types'

const actionCreator = actionCreatorFactory();

export const FETCH_BLOCKCHAINS:string = 'FETCH_BLOCKCHAINS'

export const fetchBlockchains = actionCreator.async<null, [Blockchains], Error>(FETCH_BLOCKCHAINS)
