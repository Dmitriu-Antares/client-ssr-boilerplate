import * as React from 'react'
import { Route } from 'react-router'
import routes from '../../routes'

export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1>first ssr</h1>
                {routes.map((route,key) => (
                    <Route key={key} {...route}/>
                ))}
            </div>
        )
    }
};


