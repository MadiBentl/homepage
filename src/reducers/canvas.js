import axios from 'axios'

const canvasReducer = (state = { img:"https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzODg3Mn0" }, action ) => {
  console.log('action', action)
  switch(action.type){
  case 'SET_WALLPAPER':
    return { ...state, wallpaper: action.img }
  default:
    return state
  }
}

export const setWallpaper = async (keyword) => {
  const API_KEY = 'VGtZiGdfOVBE1YFCbuuJXZCzq15k22fUBJAVXUovgcM'
  const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${keyword}&client_id=${API_KEY}&orientation=landscape`)
  console.log('wallpaper', response)
  return dispatch => {
    dispatch({ type: 'SET_WALLPAPER', img: response.data.results[0].urls.full } )
  }
}

export default canvasReducer
