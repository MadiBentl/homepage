import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const Login = () => {

  const [auth, setAuth] = useState('')

  useEffect(() => {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        'clientId': '94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com',
        'scope': 'email'
      }).then(() => {
        setAuth(window.gapi.auth2.getAuthInstance())
        console.log('useeffect', auth)
      })
    })
  }, [])

  const handleClick = () => {
    console.log('auth', auth)
    auth.signIn()
  }

  return(
    <div onClick= {() => handleClick()}>Login</div>
  )
}

export default Login
