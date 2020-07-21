import axios from 'axios'
const baseUrl = '/api/tasks/'

const addTask = async(content) => {
  const response = await axios.post(baseUrl, content)
  return response.data
}
const deleteTask = async(id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}
const editTask = async(task, toggledTask) => {
  const response = await axios.put(`${baseUrl}${task.id}`, toggledTask)
  return response.data
}
const getTasks = async(id) => {
  const response = await axios.get(baseUrl, id)
  return response.data
}
export default { getTasks, addTask, deleteTask, editTask }
