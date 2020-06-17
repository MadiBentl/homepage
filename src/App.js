import React from 'react'
import { useSelector } from 'react-redux'

import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import TaskList from './components/features/TaskList'
import Header from './components/Header'

const App = () => {
  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  const taskList = useSelector(state => state.taskList)
  return(
    <div className='app'>
      <Canvas>
        <Header />
        { taskList.name !== undefined ? <TaskList /> : null}
        { timer.name !== undefined ? <Timer /> : null}
        { notepad.name !== undefined ? <Notepad /> : null}
        <Cli />
      </Canvas>
    </div>
  )
}

export default App
