import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Canvas from './components/Canvas'
import Timer from './components/features/Timer'
import Notepad from './components/features/Notepad'
import TaskList from './components/features/TaskList'
import Header from './components/Header'
import SettingsModal from './components/SettingsModal'
import Footer from './components/Footer'
import { setLogIn } from './reducers/admin'

const App = () => {
  const dispatch = useDispatch()

  const timer = useSelector(state => state.timer)
  const notepad = useSelector(state => state.notepad)
  const weather = useSelector(state => state.weather)
  const image = useSelector(state => state.canvas)

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const user = JSON.parse(loggedInUser)
      dispatch(setLogIn(user))
    }
  }, [])

  return(
    <div className='app'>
      <Canvas>
        <SettingsModal />
        <Header weatherVis={weather.visible}/>
        <TaskList />
        { timer.visible ? <div><Timer /></div> : null}
        { notepad.visible ? <div><Notepad /></div> : null}
        <Footer source={image.source} />
      </Canvas>
    </div>
  )
}

export default App
