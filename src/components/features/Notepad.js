import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'


const Notepad = () => {

  const notepadData = useSelector(state => state.notepad)
  return(
    <>
      {notepadData.notes.map(note => {
        return <Note key={note.id} props={note} />
      })}
    </>
  )
}

export default Notepad
