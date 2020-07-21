import axios from 'axios'
const baseUrl = '/api/login'

const addUser = async(userId) => {
  const response = await axios.post(baseUrl, userId)
  return response.data
}
const getUser = async(id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}
const getUsers = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { addUser, getUser, getUsers }
