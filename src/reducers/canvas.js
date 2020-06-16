import axios from 'axios'

const initialState = {
  img:'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzODg3Mn0',
  source: 'pawel_czerwinski'
}

const canvasReducer = (state = initialState, action ) => {
  console.log('action', action)
  switch(action.type){
    case 'SET_WALLPAPER':
      return { ...state, img: action.data.img, source: action.data.source }
    default:
      return state
  }
}

export const setWallpaper = (keyword) => {
  return async dispatch => {
    const API_KEY = 'VGtZiGdfOVBE1YFCbuuJXZCzq15k22fUBJAVXUovgcM'
    if (keyword){
      const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${keyword}&client_id=${API_KEY}&orientation=landscape`)
      console.log('wallpaper', response)
      dispatch({ type: 'SET_WALLPAPER', data: { img: response.data.results[0].urls.regular, source: response.data.results[0].user.username } } )
    }else{
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&orientation=landscape`)
      console.log('wallpaper', response)
      dispatch({ type: 'SET_WALLPAPER', data: { img: response.data.urls.regular, source: response.data.user.username } } )
    }

  }
}

export default canvasReducer
