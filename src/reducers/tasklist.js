const generateId = () => {
  return Math.round(Math.random() * 9999999999)
}

const getDate = () => {
  const date = String(new Date())
  return date.split(' ').slice(0, 3).join(' ')
}

const initialState = {
  name: getDate(),
  visible: false,
  tasks: [],
  location: { x: 0, y: 0 }
}

const taskList = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_TASKLIST':
      return { ...state, visible: true }
    case 'DELETE_TASKLIST':
      return {}
    case 'TOGGLE_TASKLIST':
      return { ...state, visible: !state.visible }
    case 'ADD_TASK':
      return { ...state, tasks: state.tasks.concat({
        content: action.data.content,
        complete: false,
        id: generateId()
      }) }
    case 'TOGGLE_TASK_STATUS':
      return { ...state, tasks: state.tasks.map(task => {
        if (task.id === action.data.id) {
          return { ...task, complete: !task.complete }
        }else{
          return task
        }
      }) }
    case 'DRAG_TASKLIST':
      return { ...state, location: { x: action.data.x, y: action.data.y } }
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
export const toggleTasklist = () => {
  return({ type: 'TOGGLE_TASKLIST' })
}
export const addTask = (content) => {
  return({ type: 'ADD_TASK', data:{ content } })
}
export const toggleTask = (id) => {
  return({ type: 'TOGGLE_TASK_STATUS', data:{ id } })
}
export const dragTaskList = (x, y) => {
  return ({ type: 'DRAG_TASKLIST', data: { x, y } })
}

export default taskList
