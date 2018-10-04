import React, { Component } from 'react'
import { DesktopProps, State} from '../types'
import * as styles from '../styles/Blockchains.css' 
import { Link } from "react-router-dom";


const Blockchains = props => {
    const { blockchains } = props
    return(
        <div className={styles.container}>
            {blockchains && blockchains.map((el) =>(
                <div className={styles.link}>
                    <Link to={`/${el.id}`} key={el.id}>
                        <p>ID: {el.id}</p>
                        <p>Name: {el.name}</p>
                        <p>Blocks: {el.blocks.length}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blockchains