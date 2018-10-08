import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { getIsMobile } from "common/selectors";
import { fetchBlockchains } from "./redux/actions";
import { takeBlockchains } from "./redux/selectors";
import { ParentProps, ParentState } from './types'

const BlockchainsMobile = Loadable({
    loader: () => import('./BlockchainsMobile/BlockchainsMobile'),
    loading: () => <div> </div>
})

const BlockchainsDesktop = Loadable({
    loader: () => import('./Blockchains/Blockchains'),
    loading: () => <div> </div>
})

const mapStateToProps = ( state:any ) => ({
    blockchains: takeBlockchains(state),
    isMobile: getIsMobile(state),
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadBlockchains: () => { dispatch(fetchBlockchains.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Blockchains extends Component<ParentProps, {}> {

    componentWillMount() {
        this.props.loadBlockchains()
    }

    render() {
        const { isMobile, blockchains } = this.props

        return(
            <div>
                <Helmet>
                    <title>Blockchains</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                {isMobile ? <BlockchainsMobile /> : <BlockchainsDesktop blockchains={blockchains} />} 
            </div>
        )
    }
}