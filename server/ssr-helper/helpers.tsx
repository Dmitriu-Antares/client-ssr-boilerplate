import createSagaMiddleware, {END} from "redux-saga"
import {routerMiddleware} from "react-router-redux"
import createMemoryHistory from "history/createMemoryHistory"
import rootReducer from "../../client/rootReducer"
import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux';
import {StaticRouter} from "react-router"
import App from "../../client/containers/App/App"
import * as ReactDOMServer from "react-dom/server"
import * as React from "react"
import sagas from "../../client/rootSaga";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {collectInitial, collectContext} from 'node-style-loader/collect'
import Helmet from "react-helmet";


declare global {
    interface Window { initialState: any; }
}

const sagaMiddleware = createSagaMiddleware()

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export const configureStore = (initialState = {}) => {

    const store:any = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...reduxMiddlewares)),
    );

    store.runSaga = sagaMiddleware.run;

    store.close = () => store.dispatch(END);

    return store;
};

export const renderApp = async (store, context:{} = {}, req) => {
    const app = (
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    )
    const body = await ReactDOMServer.renderToString(app)
    return body
}
const initialStyleTag = collectInitial()

export const html = ({body}, initialState) => {
    const [contextStyleTag, reactString] = collectContext(
        () => ReactDOMServer.renderToString(React.createElement('div', initialState, body)))
    const helmetData = Helmet.renderStatic( );

    return `
      <!DOCTYPE html>
      <html>
          <head>
              <meta charset="utf-8">
              ${ helmetData.title.toString( ) }
              ${ helmetData.meta.toString( ) }
              ${initialStyleTag}
              ${contextStyleTag}
          </head>      
        <body style="margin:0">
            <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
          <div id="root">${body}</div>
        </body>
        <script src="client.js" defer></script>
        <script src="http://localhost:35729/livereload.js"></script>
      </html>
    `;
}


export const renderClient = (Component) => {
    const store = configureStore(window.initialState)
    store.runSaga(sagas, store.dispatch)
    return ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'))

}
