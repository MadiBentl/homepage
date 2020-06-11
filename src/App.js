import React from 'react'
import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import { useSelector } from 'react-redux'

const App = () => {
  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  return(
    <div className='app'>
      <Canvas>
          { timer.name !== undefined ? <Timer /> : null}
          { notepad.name !== undefined ? <Notepad /> : null}
        <Cli />
      </Canvas>

    </div>
  )
}

export default App
