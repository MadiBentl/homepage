import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Canvas = (props) => {
  const image = useSelector(state => state.canvas)
  return (
    <div className='canvas lazy-bg' style={{ backgroundImage : `url(${image.img})` }}>
      {props.children}
      <Footer source={image.source} />
    </div>
  )
}

export default Canvas
