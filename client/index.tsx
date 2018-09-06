import './style.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import App from './containers/App/App'
import sagas from './sagas';
import gistReducers from './reducers'


const reducer = combineReducers({
    gistReducers,
});

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    ),
);
const allSagas:any = sagas
// then run the saga
sagaMiddleware.run(allSagas);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


