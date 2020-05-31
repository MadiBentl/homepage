import React, { useEffect } from 'react'
import axios from 'axios'
import { setWallpaper } from '../reducers/canvas'
import { useDispatch, useSelector } from 'react-redux'

const Canvas = (props) => {
  const dispatch = useDispatch()
  const image = useSelector(state => state.canvas.wallpaper)

  useEffect(() => {
    getWallpaper()
  },[])
  const getWallpaper = async () => {
    const API_KEY = 'VGtZiGdfOVBE1YFCbuuJXZCzq15k22fUBJAVXUovgcM'
    const response = await axios.get(`https://api.unsplash.com/search/photos/?query=london&client_id=${API_KEY}&orientation=landscape`)
    console.log('wallpaper', response)
    dispatch(setWallpaper(response.data.results[0].urls.full))
  }
  console.log('react img', image)
  return (
    <div className='canvas' style={{ backgroundImage : `url(${image})` }}>
      {props.children}
    </div>
  )
}

export default Canvas
