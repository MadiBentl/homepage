import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask } from '../../reducers/tasklist'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className = 'ui checkbox'>
      <input type='checkbox' onClick = {() => dispatch(toggleTask(task.id))}/>
      <label name={`${task.content}`}> {task.content}</label>
    </div>
  )
}

const NewTask = ({ setNewTask, newTask }) => {
  return (
    <div className = 'ui transparent checkbox input'>
      <input type='checkbox' />
      <label>
        <div className = 'ui transparent input'>
          <input value={newTask.content} placeholder='add new task' onChange = {(event) => setNewTask({ active: true, content: event.target.value })}/>
        </div>
      </label>
    </div>
  )
}

const TaskList = () => {
  const taskData = useSelector(state => state.taskList)
  const [newTask, setNewTask] = useState({ active: false, content: '' })
  const handleClick = () => {
    setNewTask({ ...newTask, active: true })
  }
  return(
    <div
      className="feature tasklist"
      onClick = {() => handleClick()}
    >
      <h3>TaskList for {taskData.name}</h3>
      {taskData.tasks.map(task => {
        return <Task key={task.id} task={task} />
      })}
      {newTask.active ?
        <NewTask setNewTask={setNewTask} newTask={newTask}/>
        : null}
    </div>
  )
}

export default TaskList
