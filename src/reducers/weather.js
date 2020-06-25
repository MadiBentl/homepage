import axios from 'axios'

const weatherReducer = (state={}, action) => {
  switch(action.type){
    case 'INIT_WEATHER':
      return {
        location: action.data.name,
        temperature: action.data.main.temp,
        weather: action.data.weather[0].description,
        day: new Date(),
        visible: true
      }
    case 'UPDATE_WEATHER':
      return {
        ...state,
        day: 'TBD',
        temperature: 'TBD',
        weather: 'TBD'
      }
    default:
      return state
  }
}

export const getWeather = () => {
  return async dispatch => {
    const API_KEY = '7341f66d131be4663e75d126e95b4ed0'
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async position => {
        console.log(position)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
        dispatch({
          type: 'INIT_WEATHER',
          data: response.data
        })
      })
    }
  }
}

export default weatherReducer
