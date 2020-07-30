import loginService from '../services/admin'

const adminReducer = (state = { user: null }, action ) => {
  switch(action.type){
    case 'LOGIN':
      return { ...state, token: action.data.token, user: true, userId: action.data.userId }
    case 'LOGOUT':
      return { ...state, token: null, user: false }
    case 'GET_DAY':
      return { ...state, today: new Date().toDateString() }
    default:
      return state
  }
}

export const setLogIn = (userId) => {
  return async dispatch => {
    const users = await loginService.getUsers()
    if (!users.some(user => user.googleId === userId )){
      await loginService.addUser({ user: userId })
    }
    dispatch({ type: 'LOGIN', data: { userId } })
    window.localStorage.setItem('loggedInUser', JSON.stringify(userId))
  }
}
export const setLogOut = () => {
  window.localStorage.removeItem('loggedInUser')
  return ({ type: 'LOGOUT' })
}
export const isNewDay = () => {
  return ({ type: 'GET_DAY' })
}

export default adminReducer
