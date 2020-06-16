//a la momentum task list
//multiple to do lists

import React from 'react'
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

const TaskList = () => {
  const taskData = useSelector(state => state.taskList)

  return(
    <div className='feature tasklist'>
      <h3>TaskList for {taskData.name}</h3>
      {taskData.tasks.map(task => {
        return <Task key={task.id} task={task} />
      })}
    </div>
  )
}

export default TaskList
