import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const FETCH_GISTS_REQUESTED = 'FETCH_GISTS_REQUESTED'
export const FETCH_GISTS__SUCCEEDED = 'FETCH_GISTS__SUCCEEDED'
export const FETCH_GISTS__FAILED = 'FETCH_GISTS__FAILED'

export const fetchGists = actionCreator.async(FETCH_GISTS_REQUESTED)
