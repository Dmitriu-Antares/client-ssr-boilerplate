import * as express from 'express'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import React from 'react'
import { Provider } from 'react-redux';

import configureStore from './helpers/store'
import html from './helpers/html'
import App from '../client/containers/App/App'
import sagas from '../client/sagas'



const app = express();
const port = 3030

app.use(express.static('dist'));
app.use('/',(req,res) => {
    const store:any = configureStore({});

    const context = {}
    const body = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={{}}>
                <App/>
            </StaticRouter>
        </Provider>
    )
    //here is some problem with async. We return res.send, not store.runSaga
    res.send(html({body}));
    store.runSaga(sagas).done.then((resp) => {
        console.log('res',resp)
        res.send(html({body}));
    }).catch(err =>{
        console.log(err)
    })


})


app.listen(port, function(){
  console.log('listening port ', port)
})