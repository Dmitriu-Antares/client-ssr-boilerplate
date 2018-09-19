import { renderClient } from '../server/ssr-helper/helpers'
import App from './containers/App/App'
//import serverStyleCleanup from 'node-style-loader/clientCleanup'

declare global {
    const __ENV__: {[prop: string]: any}
}

renderClient(App)


//serverStyleCleanup()




