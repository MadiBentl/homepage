import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'


const Notepad = () => {

  const notepadData = useSelector(state => state.notepad)
  console.log(notepadData)
  return(
    <>
      {notepadData.notes.map(note => {
        return <Note key={note.id} props={note} />
      })}
    </>
  )
}

export default Notepad
