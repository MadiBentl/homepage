import React from 'react'
import { useDispatch } from 'react-redux'
import logo from '../assets/logo-white.png'
import { openModal } from '../reducers/admin'
import Login from './Login'

const Header = () => {
  const dispatch = useDispatch()
  return(
    <div className='header'>
      <img className='logo' src ={logo} alt='logo' />
      <div className = 'login'>
        <Login />
      </div>
    </div>
  )
}

export default Header
