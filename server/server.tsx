import * as express from 'express'
import { renderServer } from '../ssr-helper'

const app = express();
const port = 3030
renderServer(app)
app.listen(port, () => console.log('listening port ', port))