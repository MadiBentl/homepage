import axios from 'axios'
const baseUrl = '/api/notes'

const addNote = async(note) => {
  const response = await axios.post(baseUrl, note)
  return response.data
}
const deleteNote = async(id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}
const editNote = async(blog) => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog)
  return response.data
}
const getNotes = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getNotes, addNote, editNote, deleteNote }
