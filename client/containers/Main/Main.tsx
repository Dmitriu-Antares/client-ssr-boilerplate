import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchGists as fetchGistsAction} from "./redux/actions";
import { takeGists } from './redux/selectors';

const mapStateToProps = ( state ) => ({
    gists: takeGists(state)
})

const mapDispatchToProps = ( dispatch: any ) => ({
    loadGists: () => { dispatch(fetchGistsAction.started(null)) }
})

@connect(mapStateToProps, mapDispatchToProps)

export default class Main extends Component<any,{}> {
    componentWillMount() {
        this.props.loadGists()
    }

    renderGists = () => {
        const { gists } = this.props

        return (
            <React.Fragment>
                { gists && gists.map((gist, key) => (<div key={key}>{gist.title}</div>)) }
            </React.Fragment>
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
