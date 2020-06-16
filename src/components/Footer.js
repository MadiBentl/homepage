import React from 'react'

const Footer = (props) => {
  return (
    <div id='footer'>
      <div id='photo-source'>
        <p id='photocredit'>Photo by {props.source} courtesy of Unsplash</p>
      </div>
      <div id='feature-links'>
        <i aria-hidden="true" className="tasks icon large"></i>
        <i aria-hidden="true" className="hourglass half icon large"></i>
        <i aria-hidden="true" className="sun icon large"></i>
        <i aria-hidden="true" className="sticky note icon large"></i>
      </div>
    </div>
  )
}

export default Footer
