import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNoteStatus } from '../../reducers/notepad'

const Note = ({ note, handleClick }) => {
  return(
    <li
      onClick = {handleClick}
      className={note.complete ? 'text-strike' : null} >
      {note.content}
    </li>
  )
}

const Notepad = () => {
  const dispatch = useDispatch()
  const notepadData = useSelector(state => state.notepad)
  return(
    <div className = 'feature leftbar'>
      <h1>{ notepadData.name }</h1>
      <ul>
        {notepadData.notes.map(note =>
          <Note key={note.id} note={note} handleClick={() => dispatch(toggleNoteStatus(note.id)) }/>
        )}
      </ul>
    </div>
  )
}

export default Notepad
