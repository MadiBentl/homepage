const adminReducer = (state = { user: false }, action ) => {
  switch(action.type){
    case 'LOGIN':
      return { ...state, user: true }
    case 'LOGOUT':
      return { ...state, user: false }
    default:
      return state
  }
}

export const setLogIn = () => {
  return ({ type: 'LOGIN' })
}
export const setLogOut = () => {
  return ({ type: 'LOGOUT' })
}

export default adminReducer
