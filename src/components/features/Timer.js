import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stopTimer, pauseTimer, resumeTimer } from '../../reducers/timer'


const Timer = () => {
  const timerData = useSelector(state => state.timer)
  const [timeToDisplay, setTimeToDisplay] = useState(timerData.initialTime)
  const [distance, setDistance] = useState(0)
  const dispatch = useDispatch()

  let interval = null
  const now = timerData.timeWhenCreated

  useEffect(() => {
    if (timerData.isOn){
      interval = setInterval(() => {
        const startingTime = new Date().getTime()
        const finishedTime = (timerData.initialTime) + now
        setDistance(finishedTime - startingTime)

        let days = Math.floor(distance / (1000 * 60 * 60 * 24)) ? Math.floor(distance / (1000 * 60 * 60 * 24)) + ':' : ''
        var hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
        var minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
        var seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2)

        const timeLeft = days + hours + ':' + minutes + ':' + seconds
        if (distance >= 0){
          setTimeToDisplay(timeLeft)
        } else {
          clearInterval(interval)
        }
      }, 1000)
    }
    else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerData.isOn, timeToDisplay])

  const handleStop = () => {
    dispatch(stopTimer())
    setTimeToDisplay('0:00:00')
  }
  const handlePause = () => {
    dispatch(pauseTimer(distance))
    clearInterval(interval)
  }
  return(
    <div className = 'feature timer sidebar'>
      <h2>{ timeToDisplay }</h2>
      <p>{ timerData.name }</p>
      <div>
        <i
          aria-hidden="true"
          className="pause icon large"
          onClick={() => handlePause() }
        ></i>
        <i
          aria-hidden="true"
          className="stop icon large"
          onClick={() => handleStop()}
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
