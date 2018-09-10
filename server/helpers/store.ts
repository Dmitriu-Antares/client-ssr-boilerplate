import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import gistReducers from '../../client/reducers'

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export default (initialState = {}) => {

    const store:any = createStore(
        combineReducers({
            gistReducers
        }),
        initialState,
        compose(applyMiddleware(...reduxMiddlewares)),
    );

    store.runSaga = sagaMiddleware.run;

    store.close = () => store.dispatch(END);

    return store;
};