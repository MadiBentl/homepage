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
        <div className = 'features'>
          { timer.name !== undefined ? <Timer /> : null}
        </div>
        <Cli />
      </Canvas>

    </div>
  )
}

export default App
