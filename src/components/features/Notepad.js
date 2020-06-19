import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Notepad = () => {
  const notepadData = useSelector(state => state.notepad)
  const [content, setContent] = useState(notepadData.content)
  return(
    <div className = 'feature'>
      <h1>{ notepadData.name }</h1>
      <textarea
        value= {content}
        onChange={(event) => setContent(event.target.value)}
        placeholder='Write yourself a note!'
      >
      </textarea>
    </div>
  )
}

export default Notepad
