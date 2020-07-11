import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Draggable from 'react-draggable'

import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import TaskList from './components/features/TaskList'
import Weather from './components/features/Weather'
import Header from './components/Header'
import SettingsModal from './components/SettingsModal'

const App = () => {

  const [dragLocation, setDragLocation] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  })

  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  const taskList = useSelector(state => state.taskList)
  const weather = useSelector(state => state.weather)

  const onStart = () => {
    setDragLocation({ ...dragLocation, activeDrags: ++dragLocation.activeDrags })
  }

  const onStop = () => {
    setDragLocation({ ...dragLocation, activeDrags:--dragLocation.activeDrags })
  }
  const dragHandlers = { onStart, onStop }

  return(
    <div className='app'>
      <Canvas>
        <SettingsModal />
        <Header />
        { taskList.visible ? <Draggable {...dragHandlers}><div><TaskList /></div></Draggable> : null}
        { timer.visible ? <Draggable {...dragHandlers}><div><Timer /></div></Draggable> : null}
        { notepad.visible ? <Draggable {...dragHandlers}><div><Notepad /></div></Draggable> : null}
        { weather.visible ? <Draggable {...dragHandlers}><div><Weather /></div></Draggable> : null}
      </Canvas>
    </div>
  )
}

export default App
