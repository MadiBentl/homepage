import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'

const Modal = () => {
  const visible = useSelector(state => state.settings.visible)

  return ReactDOM.createPortal(
    <div className = {`ui modals dimmer visible ${visible ? 'active' : ''}`}>
      <div id='settings-modal' className={`ui standard modal ${visible ? 'active' : ''}`}>
        <div className='content'>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}
export default Modal
