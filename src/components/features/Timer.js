import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Timer = ({ startingTime, name='Unnamed Timer' }) => {
  return(
    <div>
      <h1>10:00</h1>
      <p>{ name }</p>
    </div>
  )
}

export default Timer
