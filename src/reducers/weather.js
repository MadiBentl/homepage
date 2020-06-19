import axios from 'axios'

const weatherReducer = (state={}, action) => {
  switch(action.type){
    case 'INIT_WEATHER':
      return {
        location: action.data.name,
        temperature: action.data.main.temp,
        weather: action.data.weather[0].main,
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

export const getWeather = (lat, lon) => {
  return async dispatch => {
    const API_KEY = '7341f66d131be4663e75d126e95b4ed0'
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=49&lon=-129&appid=${API_KEY}`)
    console.log(response)
    dispatch({
      type: 'INIT_WEATHER',
      data: response.data
    })
  }
}

export default weatherReducer
