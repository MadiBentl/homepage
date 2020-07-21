import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote, dragNote, deleteNote, editNote, toggleImportance } from '../../reducers/notepad'
import Draggable from 'react-draggable'


const Note = (props) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(props.note.content)

  const [dragLocation, setDragLocation] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: props.note.location.x, y: props.note.location.y
    }
  })

  const onStart = () => {
    setDragLocation({ ...dragLocation, activeDrags: ++dragLocation.activeDrags })
  }

  const onStop = () => {
    setDragLocation({ ...dragLocation, activeDrags:--dragLocation.activeDrags })
    dispatch(dragNote(props.note, dragLocation.controlledPosition.x, dragLocation.controlledPosition.y))
  }

  const onControlledDrag = (e, position) => {
    const { x, y } = position
    setDragLocation({ ...dragLocation, controlledPosition: { x, y } })
  }

  const dragHandlers = { onStart, onStop }

  const handleCancelClick = () => {
    var confirmation = window.confirm('Do you want to delete this?')
    if (confirmation){
      dispatch(deleteNote(props.note.id))
    }
  }

  return(
    <Draggable
      {...dragHandlers}
      handle="strong"
      position={dragLocation.controlledPosition}
      onDrag={onControlledDrag}
      bounds="body"
    >
      <div className = 'ui card feature'>
        <div className='content'>
          {props.canDeleteNote ?
            <i
              className="right floated window close outline large icon"
              onClick={() => handleCancelClick()}
            ></i> :
            <i
              className="disabled right floated window close outline large icon"
            ></i>
          }
          <strong className="cursor"><i className="right floated hand rock outline icon large"></i></strong>
          <textarea
            value= {content}
            onChange={(event) => setContent(event.target.value)}
            onBlur={() => dispatch(editNote(content, props.note))}
            placeholder='Write yourself a note!'
          >
          </textarea>
        </div>
        <div className = 'extra content'>
          {props.canAddMoreNotes ?
            <span className="right floated">
              Create new Note
              <i className="plus icon" onClick={() => dispatch(addNote())}></i>
            </span>
            : <span className="right floated disabled">
              Max 4 Notes
              <i className="plus icon"></i>
            </span>
          }
          <span>
            <i className={`star icon ${props.note.important ? 'yellow' :''}`} onClick={() => dispatch(toggleImportance(props.note))}></i>
              Important
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default Note
