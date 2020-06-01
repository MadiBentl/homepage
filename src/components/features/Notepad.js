import React from 'react'
import { useSelector } from 'react-redux'

const Notepad = () => {
  const notepadData = useSelector(state => state.notepad)
  return(
    <div>
      <h1>{ notepadData.name }</h1>
    </div>
  )
}

export default Notepad
