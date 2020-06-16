//a la momentum task list
//multiple to do lists

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask } from '../../reducers/tasklist'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <div className = 'ui Checkbox'>
        <input type='checkbox' onClick = {() => dispatch(toggleTask(task.id))}/>
        <label name={`${task.content}`}> {task.content}</label>
      </div>
    </li>
  )
}


const TaskList = () => {
  const taskData = useSelector(state => state.taskList)

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
