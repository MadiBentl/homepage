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

        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        const timeLeft = days + ':' + hours + ':' + minutes + ':' + seconds
        setTimeToDisplay(timeLeft)
      }, 1000)
    }
    else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerData.isOn, timeToDisplay])


  return(
    <div className = 'feature timer'>
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
