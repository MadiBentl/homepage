import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '.././reducers/settings'

const SettingsModal = () => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.settings.visible)

  return(
    <div id='settings-modal' className={`ui modal ${visible ? 'active' : ''}`}>
      <div className="header">Settings</div>
      <div className='content'>
        About Haro
        Communicate through the CLI or with the mouse
        Options:
          - log in or out
          - save to do list or notes
          - light mode / dark mode
          - randomize background daily
          - connect through Notion API???
      </div>
      <div className="actions">
        <div className="ui approve button">Save</div>
        <div className="ui cancel button" onClick={() => dispatch(hideModal())}>Cancel</div>
      </div>
    </div>
  )
}

export default SettingsModal
