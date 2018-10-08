import React, { Component } from 'react'
import Button from 'components/Button/Button'
import * as styles from './styles/BlockchainModal.css'

export default class BlockchainModal extends Component<any,any>{
    state = {
        inputText: ''
    }

    send = e => {
        // here we can add validation and some methods from axios to POST our data to server
        // but no here is...
        console.log('sended!')
    }

    render() {
        const { inputText } = this.state
        const { toggleModal } = this.props
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={toggleModal}>x</span>
                    <input type="text" onChange={e => this.setState({inputText: e.target.value})} value={inputText}/>
                    <Button value="Create" onClick={e => this.send(e)}/>
                </div>
            </div>  
        )
    }
}