import React from 'react'
import { useSelector } from 'react-redux'

const Weather = () => {
  const weatherData = useSelector(state => state.weather)
  console.log(weatherData)

  return (
    <div className='feature weather'>
      <h1>{Math.round((weatherData.temperature - 273.15) * 10)/10}&deg;</h1>
      <p>{weatherData.weather}</p>
    </div>
  )
}

export default Weather
