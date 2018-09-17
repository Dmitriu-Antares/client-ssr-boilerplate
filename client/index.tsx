import { renderClient } from '../server/ssr-helper/helpers'
import App from './containers/App/App'
import serverStyleCleanup from 'node-style-loader/clientCleanup'

renderClient(App)


//serverStyleCleanup()




