import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

const Login = () => {
  let auth = ''
  useEffect(() => {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        'clientId': '94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com',
        'scope': 'email'
      }).then(() => {
        auth = window.gapi.auth2.getAuthInstance()
        console.log(auth)
      })
    })
  }, [])

  const loginInfo = useSelector(state => state.admin)
  if (loginInfo.visible){
    return(
      <p>hi</p>
    )
  }else{
    return null
  }
}

export default Login
