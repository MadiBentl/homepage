import React from 'react'
import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'

const App = () => {
  return(
    <div className='app'>
      <Canvas>
        <Timer />
      </Canvas>
      <Cli />
    </div>
  )
}

export default App
