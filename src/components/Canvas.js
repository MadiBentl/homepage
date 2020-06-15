import React from 'react'
import { useSelector } from 'react-redux'

const Canvas = (props) => {
  const image = useSelector(state => state.canvas)
  return (
    <div className='canvas lazy-bg' style={{ backgroundImage : `url(${image.img})` }}>
      {props.children}
      <p id='photocredit'>Photo by {image.source} courtesy of Unsplash</p>
    </div>
  )
}

export default Canvas
