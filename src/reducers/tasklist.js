import taskService from '../services/tasklist'

const initialState = {
  visible: false,
  tasks: [],
}

const taskList = (state = initialState, action) => {
  switch(action.type){
    case 'TOGGLE_TASKLIST':
      return { ...state, visible: !state.visible }
    case 'ADD_TASK':
      return { ...state, tasks: state.tasks.concat({ ...action.data }) }
    case 'FETCH_TASKS':
      return { ...state, tasks: action.data.tasks }
    case 'TOGGLE_TASK_STATUS':
      return { ...state, tasks: state.tasks.map(task => {
        if (task.id === action.data.id) {
          return { ...action.data.toggledTask }
        }else{
          return task
        }
      }) }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => action.data.id !== task.id) }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
export const fetchTasks = (id) => {
  return async dispatch => {
    const tasks = await taskService.getTasks(id)
    dispatch({ type: 'FETCH_TASKS', data: { tasks } })
  }
}

export const toggleTasklist = () => {
  return({ type: 'TOGGLE_TASKLIST' })
}
export const addTask = (content) => {
  return async dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const user = JSON.parse(loggedInUser)
      const newTask = await taskService.addTask({ content, user, complete: false })
      dispatch({ type: 'ADD_TASK', data:newTask })
    }else {
      dispatch({ type: 'ADD_TASK', data:{ content, complete: false } })
    }
  }
}
export const toggleTask = (task) => {
  return async dispatch => {
    const toggledTask = await taskService.editTask(task)
    dispatch({ type: 'TOGGLE_TASK_STATUS', data:{ toggledTask } })
  }
}
export const deleteTask = (id) => {
  return async dispatch => {
    await taskService.deleteTask(id)
    dispatch({ type: 'DELETE_TASK', data: { id } })
  }
}

export default taskList
