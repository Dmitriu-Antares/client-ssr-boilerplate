import * as React from 'react'
import * as ReactDOM from "react-dom"
import * as express from 'express'
import { Request, Response } from 'express';
import bodyParser from 'body-parser';

import blockchain from '../api/controllers/blockhain'
import block from '../api/controllers/block'
import sagas from '../../client/rootSaga'
import { configureStore, renderApp, html } from './helpers'

export const renderServer = (app: any) => {

    app.use(express.static('dist'))
    app.use((req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
        next()
    })
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        if ('OPTIONS' == req.method) {
            res.sendStatus(200);
        } else {
            next();
        }
    });
    app.use(bodyParser.json());
    app.use('/api/blockhains', blockchain)
    app.use('/api/block', block)
    app.use('*',(req: Request, res: Response) => {
        const store:any = configureStore()
        const context = {}
        const rootTask = store.runSaga(sagas)
        const preRenderBody:any = renderApp(store, {}, req)
        preRenderBody.then(() => {
            rootTask.done.then(() => {
                const postRenderedBody:any = renderApp(store, {}, req)

                postRenderedBody.then(response => {
                    res.send(html({body:response.body}, response.bundles , store.getState()))
                })
            })
        })
        store.close()
    })



}