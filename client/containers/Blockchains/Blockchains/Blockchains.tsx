import React, { Component } from 'react'
import { DesktopProps, State } from '../types'
import * as styles from '../styles/Blockchains.css'
import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'
import BlockchainModal from 'components/BlockchainModal/BlockchainModal'

export default class Blockchains extends Component<any, any> {
    state = {
        modal: false,
    }

    toggleModal = () => this.setState({ modal: !this.state.modal })

    render() {
        const { blockchains } = this.props
        const { modal } = this.state

        return (
            <div className={styles.container}>
                <Button value="Create a Blockchain" onClick={this.toggleModal} />
                {modal && <BlockchainModal toggleModal={this.toggleModal} />}
                {blockchains &&
                    blockchains.map((el) => (
                        <div className={styles.link} key={el.id}>
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
}
