import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const DnDItem = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index} key={index}>
            {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <span>{item.contentType}</span>
                    {item.title.length > 0 && <span> : </span>}
                    <span>{item.title}</span>
                    {item.info.length > 0 && <span> : </span>}
                    <span>{item.info}</span>
                </div>
            )}
        </Draggable>
    )
}

export default DnDItem
