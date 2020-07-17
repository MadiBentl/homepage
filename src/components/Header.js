import React from 'react'
import logo from '../assets/logo-white.png'
import Weather from './features/Weather'

const Header = (props) => {
  return(
    <div className='header'>
      <img className='logo' src ={logo} alt='logo' />
      <div className = 'login'>
        {props.weatherVis ? <Weather /> : ''}
      </div>
    </div>
  )
}

export default Header
