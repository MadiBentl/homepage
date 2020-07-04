import React from 'react'
import { useDispatch } from 'react-redux'
import logo from '../assets/logo-white.png'
import { openModal } from '../reducers/admin'

const Header = () => {
  const dispatch = useDispatch()
  return(
    <div className='header'>
      <img className='logo' src ={logo} alt='logo' />
      <div className = 'login' onClick={() => dispatch(openModal())}>
          Login
      </div>
    </div>
  )
}

export default Header
