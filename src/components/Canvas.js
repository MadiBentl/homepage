import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWallpaper, loadWallPaper } from '../reducers/canvas'

const Canvas = (props) => {
  const image = useSelector(state => state.canvas)
  const dispatch = useDispatch()
  let currentDay = new Date()
  currentDay = currentDay.getDate()

  useEffect(() => {
    if (image.day !== currentDay || !window.localStorage.getItem('backgroundImageUrl')){
      dispatch(setWallpaper())
    } else {
      dispatch(loadWallPaper(window.localStorage.getItem('backgroundImageUrl'), window.localStorage.getItem('backgroundImageSrc')))
    }
  }, [dispatch])

  return (
    <div className='canvas lazy-bg' style={{ backgroundImage : `url(${image.img})`, backgroundColor: 'gray' } }>
      {props.children}
    </div>
  )
}

export default Canvas
