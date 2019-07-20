import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import * as styles from './styles/DnDWrapper.css'

export default class DnDWrapper extends Component<any, any> {
    render() {
        const { column, children } = this.props
        return (
            <div className={styles.columnWrapper}>
                <p>{column.title}</p>
                <Droppable droppableId={column.id}>
                    {(providedDrop, snapshot) => {
                        return (
                            <div
                                className={styles.column}
                                ref={providedDrop.innerRef}
                                {...providedDrop.droppableProps}
                                style={{
                                    backgroundColor: snapshot.isDraggingOver ? '#f7f7f7' : 'white',
                                }}
                            >
                                {children}
                                {providedDrop.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </div>
        )
    }
}
