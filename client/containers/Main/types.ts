export interface Gists {
    id: number
    description: string
}

export interface ReduxState {
    gists: [Gists] | []
}

export interface Props {
    gists: [Gists]
    isMobile: boolean
    loadGists(): void
}
export interface State {
    mau: boolean
}
