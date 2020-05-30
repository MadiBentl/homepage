import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Timer = () => {
  const timerData = useSelector(state => state)
  console.log(timerData)
  return(
    <div>
      <h1>{ timerData.initialTime }</h1>
      <p>{ timerData.name }</p>
    </div>
  )
}

export default Timer
