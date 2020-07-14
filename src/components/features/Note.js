import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNote, dragNote } from '../../reducers/notepad'
import Draggable from 'react-draggable'


const Note = ({ props }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const [header, setHeader] = useState('')

  const [dragLocation, setDragLocation] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: props.location.x, y: props.location.y
    }
  })

  const onStart = () => {
    setDragLocation({ ...dragLocation, activeDrags: ++dragLocation.activeDrags })
  }

  const onStop = () => {
    console.log(dragLocation)
    setDragLocation({ ...dragLocation, activeDrags:--dragLocation.activeDrags })
    console.log(dragLocation.controlledPosition.x, dragLocation.controlledPosition.y)
    dispatch(dragNote(props.id, dragLocation.controlledPosition.x, dragLocation.controlledPosition.y))
  }

  const onControlledDrag = (e, position) => {
    const { x, y } = position
    setDragLocation({ ...dragLocation, controlledPosition: { x, y } })
  }

  const dragHandlers = { onStart, onStop }

  return(
    <Draggable {...dragHandlers} handle="strong" position={dragLocation.controlledPosition} onDrag={onControlledDrag}>
      <div className = 'ui card feature'>
        <div className='content'>
          <i className="right floated window close outline large icon"></i>
          <strong className="cursor"><i className="right floated hand rock outline icon"></i></strong>
          <div
            className='header'
            contentEditable="true"
            suppressContentEditableWarning="true"
            onChange={event => setHeader(event.target.value)}
            placeholder={props.name}
          >{ props.name }</div>
          <textarea
            value= {content}
            onChange={(event) => setContent(event.target.value)}
            placeholder='Write yourself a note!'
          >
          </textarea>
        </div>
        <div className = 'extra content'>
          <span className="right floated">
            Create new Note
            <i className="plus icon" onClick={() => dispatch(addNote())}></i>
          </span>
          <span>
            <i className="star outline icon"></i>
              Favourite
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default Note
