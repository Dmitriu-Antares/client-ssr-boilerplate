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

const renderApp = async (store, context:{} = {}, req) => {
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

app.use(express.static('dist'));
app.get('*',(req,res) => {
    const store:any = configureStore({})

    const context = {}

    const rootTask = store.runSaga(sagas)


    const bodys:any = renderApp(store, {}, req)
    bodys.then(resp => {
        //res.send(html({body:resp}, store.getState()))

        rootTask.done.then(ress => {
            res.send(html({body:resp}, store.getState()))
        })
    })

    store.close()

})


app.listen(port, function(){
  console.log('listening port ', port)
})