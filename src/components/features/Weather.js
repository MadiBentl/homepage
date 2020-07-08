import React from 'react'
import { useSelector } from 'react-redux'

const Weather = () => {
  const weatherData = useSelector(state => state.weather)
  console.log(weatherData)
  const tempToDisplay = () => {
    if (weatherData.celsius){
      return Math.round((weatherData.temperature - 273.15) * 10)/10
    }else{
      return Math.round((weatherData.temperature * 1.8) - 459.67)
    }
  }
  return (
    <div className='feature little-feature'>
      <h1>{tempToDisplay()}&deg;</h1>
      <p>{weatherData.weather}</p>
    </div>
  )
}

export default Weather
