import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const now = new Date().getTime()

const Timer = () => {
  const timerData = useSelector(state => state.timer)
  const [timeToDisplay, setTimeToDisplay] = useState(timerData.initialTime)
  useEffect(() => {
    let interval = null
    if (timerData.isOn){
      interval = setInterval(() => {
        const startingTime = new Date().getTime()
        const finishedTime = (timerData.initialTime * 1000 * 60) + now
        const distance = finishedTime - startingTime

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


  return(
    <div className = 'feature timer sidebar'>
      <h1>{ timeToDisplay }</h1>
      <p>{ timerData.name }</p>
      <div>
        <i aria-hidden="true" className="pause icon large"></i>
        <i aria-hidden="true" className="stop icon large"></i>
        <i aria-hidden="true" className="play icon large"></i>
      </div>
    </div>
  )
}

export default Timer

// timer for 10min at 1PM, paused for 2min at 1:05, finished time should be finishedtime + paused
