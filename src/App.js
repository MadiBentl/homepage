import React from 'react'
import Cli from './components/Cli'
import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const timer = useSelector(state => state)
  return(
    <div className='app'>
      <Canvas>
        { timer !== {} ? <Timer /> : null}
      </Canvas>
      <Cli />
    </div>
  )
}

export default App
