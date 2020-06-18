import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pauseTimer, resumeTimer } from '../../reducers/timer'


const Timer = () => {
  const timerData = useSelector(state => state.timer)
  const [distance, setDistance] = useState(timerData.initialTime)
  const dispatch = useDispatch()

  let interval = null
  const now = timerData.timeWhenCreated

  const formatTime = (milliseconds) => {
    let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)) ? Math.floor(milliseconds / (1000 * 60 * 60 * 24)) + ':' : ''
    var hours = ('0' + Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
    var minutes = ('0' + Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    var seconds = ('0' + Math.floor((milliseconds % (1000 * 60)) / 1000)).slice(-2)

    return days + hours + ':' + minutes + ':' + seconds
  }

  useEffect(() => {
    if (timerData.isOn){
      interval = setInterval(() => {
        const startingTime = new Date().getTime()
        const finishedTime = (timerData.initialTime) + now
        setDistance(finishedTime - startingTime)

        if (distance <= 0){
          clearInterval(interval)
        }
      }, 1000)
    }
    else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerData.isOn, distance])

  const handlePause = () => {
    dispatch(pauseTimer(distance))
    clearInterval(interval)
  }
  return(
    <div className = 'feature timer sidebar'>
      <h2>{ formatTime(distance) }</h2>
      <p>{ timerData.name }</p>
      <div>
        <i
          aria-hidden="true"
          className="pause icon large"
          onClick={() => handlePause() }
        ></i>
        <i
          aria-hidden="true"
          className="play icon large"
          onClick={() => dispatch(resumeTimer())}></i>
      </div>
    </div>
  )
}

export default Timer
