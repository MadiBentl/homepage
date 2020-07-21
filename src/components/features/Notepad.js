import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNotes } from '../../reducers/notepad'
import Note from './Note'


const Notepad = () => {
  const dispatch = useDispatch()
  const notepadData = useSelector(state => state.notepad)
  const user = useSelector(state => state.admin.user)

  useEffect(() => {
    if (user){
      dispatch(fetchNotes())
    }
  }, [user, notepadData.visible])

  const canAddMoreNotes = notepadData.notes.length < 4 ? true : false
  const canDeleteNote = notepadData.notes.length === 1 ? false : true
  return(
    <>
      {notepadData.notes.map(note => {
        return <Note
          key={note.id}
          note={note}
          canDeleteNote={canDeleteNote}
          canAddMoreNotes={canAddMoreNotes}
        />
      })}
    </>
  )
}

export default Notepad
