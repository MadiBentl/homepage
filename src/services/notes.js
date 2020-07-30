import axios from 'axios'
const baseUrl = '/api/notes/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const addNote = async(content) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, content, config)
  return response.data
}
const deleteNote = async(id) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}
const editNote = async(blog) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.put(`${baseUrl}${blog.id}`, blog, config)
  return response.data
}
const getNotes = async() => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}
export default { getNotes, addNote, editNote, deleteNote, setToken }
