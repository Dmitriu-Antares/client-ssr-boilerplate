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
        return (
            <div>
                <h1>Hello msss</h1>
                {routes.map((route,key) => (
                    <Route key={key} {...route}/>
                ))}
                {
                    gistReducers && gistReducers.map((gist, key) => (
                        <div key={key}>{gist.title}</div>
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