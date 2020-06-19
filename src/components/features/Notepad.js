import React from 'react'
import { useSelector } from 'react-redux'

const Notepad = () => {
  const notepadData = useSelector(state => state.notepad)
  return(
    <div className = 'feature leftbar'>
      <h1>{ notepadData.name }</h1>
      <p> {notepadData.content} </p>
    </div>
  )
}

export default Notepad
