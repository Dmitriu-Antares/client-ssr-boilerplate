import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchGists as fetchGistsAction} from "./redux/actions";
import { takeGists } from "./redux/selectors";

import * as styles from './styles/Main.css'

const mapStateToProps = ( state ) => ({
    gists: takeGists(state)
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadGists: () => { dispatch(fetchGistsAction.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Main extends Component<any,{}> {
    componentWillMount() {
        this.props.loadGists()
    }

    renderGists = () => {
        const { gists } = this.props

        return (
            <div className={styles.submit}>
                { gists && gists.map((gist, key) => (<div className={styles.button} key={key}>{gist.title}</div>)) }
            </div>
        )}

    render(){
        return(
            <div>
                Main
                { this.renderGists() }
            </div>
        )
    }
}
