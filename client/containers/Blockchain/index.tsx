import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { getIsMobile } from "../../common/selectors";
import { fetchBlockchains } from "../Blockchains/redux/actions";
import { takeBlockchains } from "../Blockchains/redux/selectors";

const BlockchainLoadable = Loadable({
    loader: () => import('./Blockchain/Blockchain'),
    loading: () => <div> </div>
})

const mapStateToProps = ( state:any ) => ({
    blockchains: takeBlockchains(state),
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadBlockchains: () => { dispatch(fetchBlockchains.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Blockchain extends Component<any, any> {
    componentWillMount() {
        this.props.loadBlockchains()
    }

    render() {
        const { blockchains } = this.props
        const blockchainId = this.props.match.params.id
        const blockchain = blockchains[blockchainId]

        return(
            <div>
                <Helmet>
                    <title>Blockchain</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                <BlockchainLoadable blockchain={blockchain}/>
            </div>
        )
    }
}