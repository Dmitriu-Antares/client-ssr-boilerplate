export interface Block {
    id: number
    timestamp: {
        date: string
        time: string
    }
}

export interface Blockchains {
    id: number
    name: string
    blocks: Block[]
}

export interface ReduxState {}

export interface ParentState {
    modal: boolean
}

export interface ParentProps extends DesktopProps {
    isMobile: boolean
    loadBlockchains(): void
}

export interface DesktopProps {
    blockchains: Blockchains[]
}

export interface MobileProps {}

export interface State {}
