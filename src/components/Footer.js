import React from 'react'
import { useSelector } from 'react-redux'

const Footer = (props) => {
  const status = useSelector(state => {
    return {
      tasklist: state.taskList.visible,
      timer: state.timer.visible,
      notepad: state.notepad.visible,
    }
  })
  console.log('status', status)
  return (
    <div id='footer'>
      <div id='photo-source'>
        <p id='photocredit'>Photo by {props.source} courtesy of Unsplash</p>
      </div>
      <div id='feature-links-container'>
        <div id='feature-links'>
          <i aria-hidden="true" className="tasks icon large"></i>
          <i
            aria-hidden="true"
            className={`hourglass half icon large ${status.timer ? 'active-feature' : ''}` }
          ></i>
          <i aria-hidden="true" className="sun icon large"></i>
          <i aria-hidden="true" className="pencil alternative icon large"></i>
          <i aria-hidden="true" className="history icon large"></i>
        </div>
      </div>
      <div id='settings-link'>
        <i aria-hidden="true" className="cog icon large"></i>
      </div>
    </div>
  )
}

export default Footer
