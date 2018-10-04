import React, { Component } from 'react'




export default class Blockchain extends Component<any,any> {
    render(){
        const { blockchain } = this.props

        return( 
            <div>
                {
                    blockchain && 
                    <div>
                        <p>Name {blockchain.name}</p>
                        <p>Id {blockchain.id}</p>
                        <p>Blocks</p>
                        {blockchain.blocks && blockchain.blocks.map(({id, timestamp: {date, time}}) => (
                            <div key={id}>
                                <p>id: {id}</p>
                                <p>date: {date}</p>
                                <p>time: {time}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}
