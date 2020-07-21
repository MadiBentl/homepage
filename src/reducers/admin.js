import loginService from '../services/admin'

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
  return async dispatch => {
    const users = await loginService.getUsers()
    console.log('users', users)
    if (!users.some(user => user.googleId === userId )){
      try{
        const newUser = await loginService.addUser({ user: userId })
        console.log(newUser)
      }catch(err){
        console.log(err)
      }
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
