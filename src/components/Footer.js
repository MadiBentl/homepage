import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTimer } from '../reducers/timer'
import { toggleTasklist } from '../reducers/tasklist'
import { toggleNotepad } from '../reducers/notepad'
import { toggleModal } from '../reducers/settings'

const Footer = (props) => {

  const dispatch = useDispatch()

  const status = useSelector(state => {
    return {
      tasklist: state.taskList.visible,
      timer: state.timer.visible,
      notepad: state.notepad.visible,
    }
  })
  return (
    <div id='footer'>
      <div id='photo-source'>
        <p id='photocredit'>Photo by {props.source} courtesy of Unsplash</p>
      </div>
      <div id='feature-links-container'>
        <div id='feature-links'>
          <i
            aria-hidden="true"
            className={`tasks icon large ${status.tasklist ? 'active-feature' : ''}` }
            onClick={() => dispatch(toggleTasklist())}
          ></i>
          <i
            aria-hidden="true"
            className={`hourglass half icon large ${status.timer ? 'active-feature' : ''}` }
            onClick={() => dispatch(toggleTimer())}
          ></i>
          <i
            aria-hidden="true"
            className="sun icon large"
          ></i>
          <i
            aria-hidden="true"
            className={`pencil alternative icon large ${status.notepad ? 'active-feature' : ''}` }
            onClick={() => dispatch(toggleNotepad())}
          ></i>
          <i aria-hidden="true" className="history icon large"></i>
        </div>
      </div>
      <div id='settings-link'>
        <i
          aria-hidden="true"
          className="cog icon large"
          onClick = {() => dispatch(toggleModal())}
        ></i>
        <i
          aria-hidden="true"
          className="heart icon large"
        ></i>
      </div>
    </div>
  )
}

export default Footer
