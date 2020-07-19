import React from 'react'
import { useSelector } from 'react-redux'

import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import TaskList from './components/features/TaskList'
import Header from './components/Header'
import SettingsModal from './components/SettingsModal'
import Footer from './components/Footer'


const App = () => {

  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  const taskList = useSelector(state => state.taskList)
  const weather = useSelector(state => state.weather)
  const image = useSelector(state => state.canvas)

  return(
    <div className='app'>
      <Canvas>
        <SettingsModal />
        <Header weatherVis={weather.visible}/>
        { taskList.visible ? <TaskList /> : null}
        { timer.visible ? <div><Timer /></div> : null}
        { notepad.visible ? <div><Notepad /></div> : null}
        <Footer source={image.source} />
      </Canvas>
    </div>
  )
}

export default App
