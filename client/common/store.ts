import { Blockchains } from '../containers/Blockchains/types'

declare global {
    const __ENV__: { [prop: string]: any }
    interface Window {
        initialState: any
    }
}

export interface GlobalState {
    global: any
    blockchains: { blockchains: Blockchains[] }
}
