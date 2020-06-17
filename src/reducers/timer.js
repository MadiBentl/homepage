const initialState = {
  initialTime: '00:00',
  name: 'Unset Timer',
  isOn: false,
  visible: false
}

const timerReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_TIMER':
      return {
        initialTime: action.data.time,
        name: action.data.name || 'Timer',
        isOn: true,
        visible: true
      }
    case 'SET_NAME':
      return { ...state, name: action.data.name }
    case 'TOGGLE':
      return { ...state, visible: !(state.visible) }
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
export const toggleTimer = () => {
  return({ type: 'TOGGLE' })
}
export const deleteTimer = () => {
  return({ type: 'DELETE_TIMER' })
}
export default timerReducer
