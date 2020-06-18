import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, addTask } from '../../reducers/tasklist'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className = 'ui checkbox task'>
      <input type='checkbox' onClick = {() => dispatch(toggleTask(task.id))}/>
      <label className={task.complete ? 'text-strike' : null} name={`${task.content}`}> {task.content}</label>
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
  const [newTask, setNewTask] = useState('')

  return(
    <div className="feature tasklist">
      <h3>TaskList for {taskData.name}</h3>
      {taskData.tasks.map(task => {
        return <Task key={task.id} task={task} />
      })}
      <NewTask setNewTask={setNewTask} newTask={newTask}/>
    </div>
  )
}

export default TaskList
