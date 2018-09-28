import React, { Component } from 'react'
import { Props, State, Gists } from '../types'
import * as styles from '../styles/Main.css'

export default class MainMobile extends Component<Props, State> {
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


                Main Mobile
                { this.renderGists() }
            </div>
        )
    }
}
