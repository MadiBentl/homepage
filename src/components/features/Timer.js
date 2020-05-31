import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const now = new Date().getTime()

const Timer = () => {
  const timerData = useSelector(state => state)
  const [timeToDisplay, setTimeToDisplay] = useState(timerData.initialTime)
  if (timerData.isOn){
    setInterval(() => {
      const startingTime = new Date().getTime()
      const finishedTime = (timerData.initialTime * 1000 * 60) + now
      const distance = finishedTime - startingTime

      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const timeLeft = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
      setTimeToDisplay(timeLeft)
    }, 1000)
  }
  return(
    <div>
      <h1>{ timeToDisplay }</h1>
      <p>{ timerData.name }</p>
    </div>
  )
}

export default Timer
