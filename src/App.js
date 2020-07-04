import React from 'react'
import { useSelector } from 'react-redux'

import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import TaskList from './components/features/TaskList'
import Weather from './components/features/Weather'
import Header from './components/Header'
import SettingsModal from './components/SettingsModal'
import LoginModal from './components/Login'

const App = () => {
  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  const taskList = useSelector(state => state.taskList)
  const weather = useSelector(state => state.weather)

  return(
    <div className='app'>
      <Canvas>
        <SettingsModal />
        <LoginModal />
        <Header />
        { taskList.visible ? <TaskList /> : null}
        { timer.visible ? <Timer /> : null}
        { notepad.visible ? <Notepad /> : null}
        { weather.visible ? <Weather /> : null}
        <Cli />
      </Canvas>
    </div>
  )
}

export default App
