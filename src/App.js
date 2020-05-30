import React from 'react'
import Cli from './components/Cli'
import Canvas from './components/Canvas'

const App = () => {
  return(
    <div className='app'>
      <Canvas />
      <Cli />
    </div>
  )
}

export default App
