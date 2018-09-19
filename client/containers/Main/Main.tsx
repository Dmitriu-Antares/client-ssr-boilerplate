import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchGists as fetchGistsAction} from "./redux/actions";
import { takeGists } from "./redux/selectors";
import Helmet from "react-helmet";
import { Props, State, Gists } from './types'
import { GlobalState } from '../../common/store'
import * as styles from './styles/Main.css'

const mainImage = require('../../images/main.jpg')


const mapStateToProps = ( state:GlobalState ) => ({
    gists: takeGists(state)
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadGists: () => { dispatch(fetchGistsAction.started(null)) }
})

@(connect(mapStateToProps, mapDispatchToProps) as any)

export default class Main extends Component<Props, State> {
    componentWillMount() {
        this.props.loadGists()
    }

    renderGists = () => {
        const { gists } = this.props
        return (
            <div className={styles.submit}>
                { gists && gists.map((gist, key) => (<div className={styles.button} key={key}>{gist.description}</div>)) }
            </div>
        )}

    render(){
        return(
            <div>

                <Helmet>
                    <title>Contact Page</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                Main
                { this.renderGists() }
                <img src={mainImage} alt=""/>
            </div>
        )
    }
}
