import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import routes from '../../routes'

export default class App extends React.Component{
    render(){

        return (
            <div>
                <h1>first ssr</h1>
                {routes.map((route,key) => (
                    // @ts-ignore
                    <Route key={key} {...route}/>
                ))}
            </div>
        )
    }
};


