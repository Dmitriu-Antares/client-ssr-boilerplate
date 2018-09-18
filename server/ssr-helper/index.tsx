import * as React from 'react'
import * as ReactDOM from "react-dom"
import * as express from 'express'

import sagas from '../../client/rootSaga'
import { configureStore, renderApp, html } from './helpers'

export const renderServer = (app: any) => {

    app.use(express.static('dist'))

    app.get('*',(req:any,res:any) => {
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