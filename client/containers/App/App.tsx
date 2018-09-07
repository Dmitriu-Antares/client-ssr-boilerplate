import * as React from 'react'
import { Route } from 'react-router'

import { connect } from 'react-redux';
import routes from '../../routes'


import { fetchGists as fetchGistsAction } from '../../actions';

class App extends React.Component<any,{}> {
    componentWillMount() {
        this.props.loadGists()
    }

    render(){
        const { gistReducers } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Hello my</h1>
                {routes.map((route,key) => (
                    <Route key={key} {...route}/>
                ))}
                {
                    gistReducers.map(gist => (
                        <div>{gist.title}</div>
                        )
                    )
                }
            </div>
        )
    }
};

const mapStateToProps = ({ gistReducers }) => ({
    gistReducers
});

export default connect(mapStateToProps, { loadGists: fetchGistsAction })(App);