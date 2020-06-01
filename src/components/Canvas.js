import React from 'react'
import { useSelector } from 'react-redux'

const Canvas = (props) => {
  const image = useSelector(state => state.canvas.img)

  console.log('img', image)
  return (
    <div className='canvas' style={{ backgroundImage : `url(${image})` }}>
      {props.children}
    </div>
  )
}

export default Canvas
