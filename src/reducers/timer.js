const timerReducer = (state = {}, action) => {
  switch(action.type){
  case 'SET_TIMER':
    return {
      initialTime: action.data.time,
      name: action.data.name || 'Timer',
      isOn: true
    }
  case 'SET_NAME':
    return { ...state, name: action.data.name }
  case 'DELETE_TIMER':
    return {}
  default:
    return state
  }
}

export const createTimer = (time) => {
  return ({ type: 'SET_TIMER', data: { time } })
}

export const setName = (name) => {
  return({ type: 'SET_NAME', data: { name } })
}
export const deleteTimer = () => {
  return({ type: 'DELETE_TIMER' })
}
export default timerReducer
