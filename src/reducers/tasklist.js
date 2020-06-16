const generateId = () => {
  return Math.round(Math.random() * 9999999999)
}

const getDate = () => {
  const date = String(new Date())
  return date.split(' ').slice(0, 3).join(' ')
}

const taskList = (state = {}, action) => {
  switch(action.type){
    case 'CREATE_TASKLIST':
      return {
        name: getDate(),
        visible: true,
        tasks: []
      }
    case 'DELETE_TASKLIST':
      return {}
    case 'HIDE_TASKLIST':
      return { ...state, visible: false }
    case 'SHOW_TASKLIST':
      return { ...state, visible: true }
    case 'ADD_TASK':
      return { ...state, tasks: state.tasks.concat({
        content: action.data.content,
        complete: false,
        id: generateId()
      }) }
    case 'TOGGLE_STATUS':
      const taskToToggle = state.tasks.find(n => n.id === action.data.id)
      const toggledTask = {
        ...taskToToggle,
        complete: !taskToToggle.complete
      }
      console.log('toggled', toggledTask)
      const newTasks = state.tasks.map(n =>
        n.id === action.data.id ? toggledTask : n
      )
      console.log(newTasks)
      return { ...state, tasks: newTasks }
    default:
      return state
  }
}

export const createTasklist = () => {
  return({ type: 'CREATE_TASKLIST' })
}
export const deleteTasklist = () => {
  return({ type: 'DELETE_TASKLIST' })
}
export const hideTasklist = () => {
  return({ type: 'HIDE_TASKLIST' })
}
export const showTasklist = () => {
  return({ type: 'SHOW_TASKLIST' })
}
export const addTask = (content) => {
  return({ type: 'ADD_TASK', data:{ content } })
}
export const toggleTaskStatus = (id) => {
  return({ type: 'TOGGLE_STATUS', data:{ id } })
}

export default taskList
