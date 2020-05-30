const timerReducer = (state = {}, action) => {
  switch(action.type){
  case 'SET_TIMER':
    return {
      initialTime: action.data.time,
      name: action.data.name || 'Unnamed Timer',
      currentTime: action.data.time,
    }
  case 'SET_NAME':
    return { ...state, name: action.data.name }
  case 'CLEAR_TIMER':
    return { ...state, currentTime: null }
  case 'DELETE_TIMER':
    return {}
  default:
    return state
  }
}

export const createTimer = (data) => {
  return ({ type: 'SET_TIMER', data })
}

export const setName = (name) => {
  return({ type: 'SET_NAME', data: { name } })
}
export const resetTimer = () => {
  return({ type: 'CLEAR_TIMER' })
}
export const deleteTimer = () => {
  return({ type: 'DELETE_TIMER' })
}
export default timerReducer
