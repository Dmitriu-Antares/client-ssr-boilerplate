import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { GlobalState } from '../../common/store'
import { getIsMobile } from "../../common/selectors";
import {fetchGists as fetchGistsAction} from "./redux/actions";
import { takeGists } from "./redux/selectors";
import { Props, State, Gists } from './types'

import './styles/Main.css'

const MainMobile = Loadable({
    loader: () => import('./MainMobile/MainMobile'),
    loading: () => <div> </div>
})

const MainDesktop = Loadable({
    loader: () => import('./Main/Main'),
    loading: () => <div> </div>
})

const mapStateToProps = ( state:GlobalState ) => ({
    gists: takeGists(state),
    isMobile: getIsMobile(state),
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadGists: () => { dispatch(fetchGistsAction.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Main extends Component<Props, State> {
    componentWillMount() {
        this.props.loadGists()
    }

    render() {
        const { isMobile, gists } = this.props

        return(
            <div>
                <Helmet>
                    <title>C1</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                mau
                { isMobile ? <MainMobile gists={gists}/> : <MainDesktop gists={gists}/>}
            </div>
        )
    }
}