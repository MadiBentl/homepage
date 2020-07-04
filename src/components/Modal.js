import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {

  return ReactDOM.createPortal(
    <div className = {`ui modals dimmer visible ${props.visible ? 'active' : ''}`}>
      <div id='settings-modal' className={`ui standard modal ${props.visible ? 'active' : ''}`}>
        <div className='content'>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}
export default Modal
