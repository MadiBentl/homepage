import React from 'react'
import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import { useSelector } from 'react-redux'

const App = () => {
  const timer = useSelector(state => state.timer)
  return(
    <div className='app'>
      <Canvas>
        { timer.name !== undefined ? <Timer /> : null}
        <Cli />
      </Canvas>

    </div>
  )
}

export default App
