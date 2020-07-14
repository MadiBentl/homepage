import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../reducers/notepad'
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
      x: -400, y: 200
    }
  })

  const onStart = () => {
    setDragLocation({ ...dragLocation, activeDrags: ++dragLocation.activeDrags })
  }

  const onStop = () => {
    setDragLocation({ ...dragLocation, activeDrags:--dragLocation.activeDrags })
  }
  const dragHandlers = { onStart, onStop }

  return(
    <Draggable {...dragHandlers}>
      <div className = 'ui card feature'>
        <div className='content'>
          <i className="right floated cancel icon"></i>
          <div
            className='header'
            contentEditable="true"
            suppressContentEditableWarning="true"
            onChange={event => setHeader(event.target.value)}
            placeholder={props.name}
          >{ header }</div>
          <textarea
            value= {content}
            onChange={(event) => setContent(event.target.value)}
            placeholder='Write yourself a note!'
          >
          </textarea>
          <span className="right floated">
            Create new Note
            <i className="plus icon" onClick={() => dispatch(addNote())}></i>
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default Note
