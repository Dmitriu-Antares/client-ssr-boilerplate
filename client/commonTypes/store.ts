import { Gists } from '../containers/Main/types'

export interface GlobalState {
    main: { gists: [Gists] }
}