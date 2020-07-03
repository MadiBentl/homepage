import React from 'react'
import logo from '../assets/logo-white.png'

const Header = () => {
  return(
    <div className='header'>
      <img className='logo' src ={logo} alt='logo' />
      <div className = 'login'>
          Login
      </div>
    </div>
  )
}

export default Header
