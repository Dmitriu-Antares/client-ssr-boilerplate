import typescriptFsa from 'typescript-fsa'
import { Gists } from '../types'

const actionCreator = actionCreatorFactory()

export const FETCH_GISTS: string = 'FETCH_GISTS'

export const fetchGists = actionCreator.async<null, [Gists], Error>(FETCH_GISTS)
