import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogIn, setLogOut } from '../reducers/admin'

const Login = () => {

  const [auth, setAuth] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector(state => state.admin.user )

  useEffect(() => {
    const handleAuthChange = (isSignedIn) => {
      if (isSignedIn){
        dispatch(setLogIn(auth.currentUser.get().getId()))
      }else{
        dispatch(setLogOut())
      }
    }
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId: '213163615644-gb7ovof03holrqhn7ela4jmu4e3v7oa1.apps.googleusercontent.com',
        scope: 'email'
      }).then(async() => {
        const googleAuth = await window.gapi.auth2.getAuthInstance()
        setAuth(googleAuth)
        if(auth){
          handleAuthChange(auth.isSignedIn.get())
          auth.isSignedIn.listen(handleAuthChange)
        }
      })
    })
  }, [auth])

  const handleLogin = async() => {
    auth.signIn()
  }
  const handleLogout = () => {
    auth.signOut()
  }
  const renderAuthButton = () => {
    if ( user === null){
      return null
    }
    if (user){
      return <div onClick= {handleLogout}>Logout</div>
    }else{
      return(
        <div onClick= {handleLogin}>Login</div>
      )
    }
  }
  return(
    <div>
      {renderAuthButton()}
    </div>
  )
}

export default Login
