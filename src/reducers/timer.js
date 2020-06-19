const initialState = {
  initialTime: 0,
  name: 'Unset Timer',
  isOn: false,
  visible: false
}

const timerReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_TIMER':
      return {
        initialTime: (action.data.time * 60000),
        name: action.data.name || 'Timer',
        timeWhenCreated: new Date().getTime(),
        isOn: true,
        visible: true
      }
    case 'STOP_TIMER':
      return { ...state, isOn: !state.isOn }
    case 'SET_NAME':
      return { ...state, name: action.data.name }
    case 'TOGGLE':
      return { ...state, visible: !(state.visible) }
    case 'RESUME_TIMER':
      if (state.isOn){
        return { ...state, isOn: true, timeWhenCreated: new Date().getTime() }
      }else{
        return state
      }
    case 'PAUSE_TIMER':
      return { ...state, isOn: false, initialTime: action.data.timeRemaining }
    case 'DELETE_TIMER':
      return initialState
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
export const stopTimer = () => {
  return({ type: 'STOP_TIMER' })
}
export const resumeTimer = () => {
  return ({ type: 'RESUME_TIMER' })
}
export const pauseTimer = (timeRemaining) => {
  return ({ type: 'PAUSE_TIMER', data: { timeRemaining } })
}
export default timerReducer
