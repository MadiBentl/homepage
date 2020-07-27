import axios from 'axios'

const getDay = () => {
  let day = new Date()
  return day.getDate()
}
const canvasReducer = (state = { day: getDay() }, action ) => {
  switch(action.type){
    case 'SET_WALLPAPER':
      return { ...state, img: action.data.img, source: action.data.source }
    case 'LOAD_WALLPAPER': {
      return { ...state, img: action.data.url, source: action.data.source }
    }
    default:
      return state
  }
}

export const setWallpaper = (keyword) => {
  return async dispatch => {
    const API_KEY = 'VGtZiGdfOVBE1YFCbuuJXZCzq15k22fUBJAVXUovgcM'
    if (keyword){
      const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${keyword}&client_id=${API_KEY}&orientation=landscape`)
      window.localStorage.setItem('backgroundImageUrl', response.data.results[0].urls.regular)
      dispatch({ type: 'SET_WALLPAPER', data: { img: response.data.results[0].urls.regular, source: response.data.results[0].user.username } } )
    }else{
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&orientation=landscape&collections=10860210`)
      console.log(response)
      window.localStorage.setItem('backgroundImageUrl', response.data.urls.regular)
      window.localStorage.setItem('backgroundImageSrc', response.data.user.username)
      dispatch({ type: 'SET_WALLPAPER', data: { img: response.data.urls.regular, source: response.data.user.username } } )
    }
  }
}

export const loadWallPaper = (url, source) => {
  return({ type: 'LOAD_WALLPAPER', data: { url, source } })
}

export default canvasReducer
