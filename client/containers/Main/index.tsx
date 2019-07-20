import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { DragDropContext } from 'react-beautiful-dnd'
import * as styles from './styles/Main.css'
import DnDModal from 'components/DnDModal/DnDModal'
import DnDWrapper from 'components/DnDWrapper/DnDWrapper'
import DnDItem from 'components/DnDItem/DnDItem'

const initialState = {
    columns: [
        {
            id: 1,
            title: 'elements',
            items: [
                {
                    id: 1,
                    contentType: 'text',
                    title: '',
                    info: '',
                },
                {
                    id: 2,
                    contentType: 'number',
                    title: '',
                    info: '',
                },
                {
                    id: 3,
                    contentType: 'time',
                    title: '',
                    info: '',
                },
            ],
        },
        {
            id: 2,
            title: 'list',
            items: [],
        },
    ],
    modal: false,
    modalDestination: {
        droppableId: 0,
        index: 0,
    },
    modalText: '',
    modalTitle: '',
}

export default class Main extends Component<any, any> {
    state = initialState

    deepClone = (el) => JSON.parse(JSON.stringify(el))

    onDragEnd = (e) => {
        const { destination, draggableId, source } = e
        const { columns } = this.state

        if (destination.droppableId !== 1 && source.droppableId === 1) {
            let newCol = this.deepClone(columns)
            let item = this.deepClone(columns[0].items[draggableId - 1])
            item.id = item.id + Date.now() + Math.random()

            newCol[destination.droppableId - 1].items.splice(destination.index, 0, item)
            this.setState({ modal: true, modalDestination: destination, columns: newCol })
        }
    }

    changeText = (e) => this.setState({ modalText: e.target.value })

    changeTitle = (e) => this.setState({ modalTitle: e.target.value })

    addInfo = () => {
        const { modalText, modalTitle, modalDestination, columns } = this.state
        let newCol = this.deepClone(columns)
        newCol[modalDestination.droppableId - 1].items[modalDestination.index].info = modalText
        newCol[modalDestination.droppableId - 1].items[modalDestination.index].title = modalTitle
        this.setState({ columns: newCol, modal: false, modalText: '', modalTitle: '' })
    }

    render() {
        const { columns, modal, modalTitle, modalText } = this.state

        return (
            <div>
                <Helmet>
                    <title>DnD</title>
                    <meta name="description" content="This is a proof of concept for React SSRss" />
                </Helmet>
                {modal && (
                    <DnDModal
                        modalText={modalText}
                        modalTitle={modalTitle}
                        changeText={this.changeText}
                        changeTitle={this.changeTitle}
                        addInfo={this.addInfo}
                    />
                )}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className={`${styles.wrapper} ${styles.container}`}>
                        {columns.map((column) => (
                            <DnDWrapper column={column}>
                                {column.items.map((item, index) => (
                                    <DnDItem item={item} index={index} />
                                ))}
                            </DnDWrapper>
                        ))}
                    </div>
                </DragDropContext>
            </div>
        )
    }
}
