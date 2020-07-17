import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, addTask, dragTaskList, deleteTask } from '../../reducers/tasklist'
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

  const [dragLocation, setDragLocation] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: taskData.location.x, y: taskData.location.y
    }
  })

  const onStart = () => {
    setDragLocation({ ...dragLocation, activeDrags: ++dragLocation.activeDrags })
  }

  const onStop = () => {
    console.log(dragLocation)
    setDragLocation({ ...dragLocation, activeDrags:--dragLocation.activeDrags })
    console.log(dragLocation.controlledPosition.x, dragLocation.controlledPosition.y)
    dispatch(dragTaskList(dragLocation.controlledPosition.x, dragLocation.controlledPosition.y))
  }

  const onControlledDrag = (e, position) => {
    const { x, y } = position
    setDragLocation({ ...dragLocation, controlledPosition: { x, y } })
  }

  const dragHandlers = { onStart, onStop }


  return(
    <Draggable {...dragHandlers} handle="strong" position={dragLocation.controlledPosition} onDrag={onControlledDrag}>
      <div className="ui card tasklist">
        <div className='content'>
          <strong className="cursor"><i className="right floated hand rock outline icon large"></i></strong>
          <div className='header'>TaskList for {taskData.name}</div>
          {taskData.tasks.map(task => {
            return <Task key={task.id} task={task} />
          })}
          <NewTask setNewTask={setNewTask} newTask={newTask}/>
        </div>
      </div>
    </Draggable>
  )
}

export default TaskList
