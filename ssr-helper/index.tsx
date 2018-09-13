import * as React from 'react'
import * as ReactDOM from "react-dom"
import * as express from "express"
import {Provider} from "react-redux"
import {BrowserRouter, StaticRouter} from "react-router-dom"

import sagas from '../client/rootSaga'
import { configureStore, renderApp, html } from './helpers'


export const renderClient = Component => {
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

export const renderServer = app => {

    app.use(express.static('dist'))

    app.get('*',(req,res) => {
        const store:any = configureStore()
        const context = {}
        const rootTask = store.runSaga(sagas)
        const preRenderBody:any = renderApp(store, {}, req)

        preRenderBody.then(() => {
            rootTask.done.then(() => {
                const postRenderedBody = renderApp(store, {}, req)

                postRenderedBody.then(body => {
                    res.send(html({body}, store.getState()))
                })
            })
        })
        store.close()
    })
}