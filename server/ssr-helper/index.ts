import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as express from 'express'
import { Request, Response } from 'express'

import sagas from '../../client/rootSaga'
import { configureStore, renderApp, html } from './helpers'

export const renderServer = (app: any) => {
    app.use(express.static('dist'))
    app.use((req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
        next()
    })
    app.options('/*', (req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        res.send(200)
    })
    app.get('*', (req: Request, res: Response) => {
        const store: any = configureStore()
        const context = {}
        const rootTask = store.runSaga(sagas)
        const preRenderBody: any = renderApp(store, {}, req)
        preRenderBody.then(() => {
            rootTask.done.then(() => {
                const postRenderedBody: any = renderApp(store, {}, req)

                postRenderedBody.then((response) => {
                    res.send(html({ body: response.body }, response.bundles, store.getState()))
                })
            })
        })
        store.close()
    })
}
