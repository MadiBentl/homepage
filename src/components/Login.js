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
        dispatch(setLogIn(auth.currentUser.get().getId(), auth.currentUser.get().getAuthResponse().access_token))
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
  }, [auth, dispatch])

  const handleLogin = async() => {
    try{
      auth.signIn()
    }catch(err){
      console.log(err)
    }
  }
  const handleLogout = () => {
    auth.signOut()
  }
  const renderAuthButton = () => {
    if (user){
      return <div className='ui google plus button' onClick={handleLogout}>Logout</div>
    }else{
      return(
        <button className='ui google plus button' onClick={handleLogin}>
          <i className="google icon"></i>
          Login with Google
        </button>
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
