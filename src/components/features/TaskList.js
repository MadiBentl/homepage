import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, addTask, toggleTasklist, deleteTask } from '../../reducers/tasklist'
import Draggable from 'react-draggable'

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div className = 'ui checkbox task'>
      <input type='checkbox' onClick = {() => dispatch(toggleTask(task.id))}/>
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
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

  return(
    <div className="ui card tasklist">
      <div className='content'>
        <div className='header'>TaskList for {taskData.name}</div>
        {taskData.tasks.map(task => {
          return <Task key={task.id} task={task} />
        })}
        <NewTask setNewTask={setNewTask} newTask={newTask}/>
      </div>
      <div className='extra content'>
        <div className='center aligned'>
          <i
            className='icon arrow alternate circle left outline large'
            onClick={() => dispatch(toggleTasklist())}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskList
