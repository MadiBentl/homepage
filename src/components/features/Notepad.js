import React from 'react'
import { useSelector } from 'react-redux'

const Note = ({ note }) => {
  return(
    <li>
      {note.content}
    </li>
  )
}

const Notepad = () => {
  const notepadData = useSelector(state => state.notepad)
  return(
    <div>
      <h1>{ notepadData.name }</h1>
      <ul>
        {notepadData.notes.map(note =>
          <Note key={note.content} note={note} />
        )}
      </ul>
    </div>
  )
}

export default Notepad
