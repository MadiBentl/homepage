import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWallpaper } from '../reducers/canvas'
import Footer from './Footer'

const Canvas = (props) => {
  const image = useSelector(state => state.canvas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setWallpaper())
  }, [dispatch])

  return (
    <div className='canvas lazy-bg' style={{ backgroundImage : `url(${image.img})`, backgroundColor: 'gray' } }>
      {props.children}
      <Footer source={image.source} />
    </div>
  )
}

export default Canvas
