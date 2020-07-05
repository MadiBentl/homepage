import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const Login = () => {
  const [auth, setAuth] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        'clientId': '94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com',
        'scope': 'email'
      }).then(() => {
        const googleAuth = window.gapi.auth2.getAuthInstance()
        setAuth(googleAuth)
        setIsLoggedIn(googleAuth.isSignedIn.get())
        console.log(googleAuth, isLoggedIn)
      })
    })
  }, [])

  const handleLogin = () => {
    auth.signIn()
  }
  const handleLogout = () => {
    auth.signOut()
  }
  if (auth && auth.isLoggedIn){
    return <div onClick= {() => handleLogout()}>LogOut</div>
  }
  return(
    <div onClick= {() => handleLogin()}>Login</div>
  )
}

export default Login
