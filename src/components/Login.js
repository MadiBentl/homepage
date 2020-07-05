import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogIn, setLogOut } from '../reducers/admin'

const Login = () => {
  const [auth, setAuth] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.admin.user)

  useEffect(() => {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        'clientId': '94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com',
        'scope': 'email'
      }).then(() => {
        const googleAuth = window.gapi.auth2.getAuthInstance()
        setAuth(googleAuth)
        console.log('status', googleAuth.isSignedIn.get())
      })
    })
  }, [])

  const handleLogin = () => {
    auth.signIn()
    dispatch(setLogIn())
  }
  const handleLogout = () => {
    auth.signOut()
    dispatch(setLogOut())
  }
  console.log('user', user)
  if (user){
    return <div onClick= {() => handleLogout()}>Logout</div>
  }else{
    return(
      <div onClick= {() => handleLogin()}>Login</div>
    )
  }
}

export default Login
