import React, { Component } from 'react'


import * as styles from '../styles/Blockchain.css'


export default class Blockchain extends Component<any,any> {
    render(){
        const { blockchain } = this.props

        return(
            <div>
                {
                    blockchain && 
                    <div className={styles.container}>
                        <p>Name {blockchain.name}</p>
                        <p>Id {blockchain.id}</p>
                        <p>Blocks</p>
                        <div className={styles.wrapper}>
                            {blockchain.blocks && blockchain.blocks.map(({id, timestamp: {date, time}}) => (
                                <div key={id} className={styles.block}>
                                    <p>id: {id}</p>
                                    <p>date: {date}</p>
                                    <p>time: {time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
