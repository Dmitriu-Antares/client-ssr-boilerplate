import { Gists } from '../containers/Main/types'

declare global {
    const __ENV__: {[prop: string]: any }
    interface Window { initialState: any }
}

export interface GlobalState {
    main: { gists: [Gists] },
    global: any
}

