import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks, toggleTask, addTask, toggleTasklist, deleteTask } from '../../reducers/tasklist'

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div className = 'ui checkbox task'>
      <input type='checkbox' onClick = {() => dispatch(toggleTask(task))}/>
      <label className={task.complete ? 'text-strike' : null} name={`${task.content}`}>
        {task.content}
        <i className="delete-x close icon" onClick={() => handleDeleteClick(task.id)}></i>
      </label>
    </div>
  )
}

const NewTask = ({ setNewTask, newTask }) => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTask(newTask))
    setNewTask('')
  }
  return (
    <div className = 'ui disabled checkbox task'>
      <input type='checkbox' />
      <label>
        <form onSubmit={(event) => handleSubmit(event, newTask) }>
          <div className = 'ui transparent input'>
            <input value={newTask} placeholder='add new task' onChange = {(event) => setNewTask(event.target.value)}/>
          </div>
        </form>
      </label>
    </div>
  )
}

const TaskList = () => {
  const taskData = useSelector(state => state.taskList)
  const loggedIn = useSelector(state => state.admin.user)
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const wrapper = useRef()

  useEffect(() => {
    if(loggedIn){
      dispatch(fetchTasks(loggedIn))
    }
  }, [loggedIn, taskData.visible, dispatch])

  useEffect(() => {
    wrapper.current.classList.toggle('is-open')
  }, [taskData.visible, dispatch])

  return(
    <div className='ui card tasklist is-open' ref={wrapper}>
      <div className='content'>
        <i
          className='right floated icon close large'
          onClick={() => dispatch(toggleTasklist())}
        />
        <div className='header'>Task List</div>

        {taskData.tasks.map(task => {
          return <Task key={task.id} task={task} />
        })}
        <NewTask setNewTask={setNewTask} newTask={newTask}/>
      </div>
    </div>
  )
}

export default TaskList
