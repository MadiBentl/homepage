const adminReducer = (state = { visible: false }, action ) => {
  switch(action.type){
    case 'OPEN_MODAL':
      return { ...state, visible: true }
    case 'LOGIN':
      break
    case 'LOGOUT':
      break
    default:
      return state
  }
}

export const openModal = () => {
  return ({ type: 'OPEN_MODAL' })
}

export default adminReducer
