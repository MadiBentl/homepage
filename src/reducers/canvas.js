const canvasReducer = (state = [], action ) => {
  console.log('action', action)
  switch(action.type){
  case 'SET_WALLPAPER':
    return { ...state, wallpaper: action.data.image }
  default:
    return state
  }
}

export const setWallpaper = (image) => {
  return({ type: 'SET_WALLPAPER', data: { image } })
}

export default canvasReducer
