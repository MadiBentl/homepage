//a la momentum task list
//multiple to do lists

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Task = ({ task }) => {
  console.log(task
  )
  return (
    <li>
      <div className = 'ui Checkbox'>
        <input type='checkbox' />
        <label name={`${task.content}`}>{task.content}</label>
      </div>
    </li>
  )
}


const TaskList = () => {

  const taskData = useSelector(state => state.taskList)
  console.log(taskData)
  return(
    <div className='feature'>
      <h3>TaskList for {taskData.name}</h3>
      <ul>
        {taskData.tasks.map(task => {
          return <Task key={task.id} task={task} />
        })}
      </ul>
    </div>
  )
}

export default TaskList
