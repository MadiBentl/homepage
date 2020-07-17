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

  if (!weatherData.loaded){
    console.log('loading...')
    return (
      <div className='feature little-feature'>
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Fetching Data...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='feature weather'>
      <h1>{tempToDisplay()}&deg;</h1>
      <p>{weatherData.weather}</p>
    </div>
  )
}

export default Weather
