const adminReducer = (state = { user: null }, action ) => {
  switch(action.type){
    case 'LOGIN':
      return { ...state, user: true, userId: action.data.userId }
    case 'LOGOUT':
      return { ...state, user: false }
    case 'GET_DAY':
      return { ...state, today: new Date().toDateString() }
    default:
      return state
  }
}

export const setLogIn = (userId) => {
  return ({ type: 'LOGIN', data: { userId } })
}
export const setLogOut = () => {
  return ({ type: 'LOGOUT' })
}
export const isNewDay = () => {
  return ({ type: 'GET_DAY' })
}

export default adminReducer
