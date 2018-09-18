export interface Gists {
    id:number,
    description: string
}

export interface Props {
    gists: [Gists]
    loadGists(): void
}
export interface State {
    mau: boolean
}


