import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const FETCH_GISTS = 'FETCH_GISTS'

export const fetchGists = actionCreator.async(FETCH_GISTS)
