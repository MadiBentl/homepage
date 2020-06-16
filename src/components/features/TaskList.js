//a la momentum task list
//multiple to do lists

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Task = (task) => {
  return (
    <li key={task.id}>
      <div className = 'ui Checkbox'>
        <input type='checkbox' />
        <label>task.content</label>
      </div>
    </li>
  )
}


const TaskList = () => {

  const taskData = useSelector(state => state.taskList)
  console.log(taskData.name)
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
