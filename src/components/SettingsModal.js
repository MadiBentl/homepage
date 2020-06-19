import React from 'react'
import { useSelector } from 'react-redux'

const SettingsModal = () => {
  const visible = useSelector(state => state.settings)

  return(
    <div id='settings-modal' className={`ui modal ${visible ? 'active' : ''}`}>
      About Haro
      Communicate through the CLI or with the mouse
      Options:
        - log in or out
        - save to do list or notes
        - light mode / dark mode
        - randomize background daily
        - connect through Notion API???
    </div>
  )
}

export default SettingsModal
