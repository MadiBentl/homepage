import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'


const Notepad = () => {

  const notepadData = useSelector(state => state.notepad)
  const canAddMoreNotes = notepadData.notes.length < 4 ? true : false
  return(
    <>
      {notepadData.notes.map(note => {
        return <Note key={note.id} note={note} canAddMoreNotes={canAddMoreNotes}/>
      })}
    </>
  )
}

export default Notepad
