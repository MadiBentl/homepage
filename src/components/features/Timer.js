import React from 'react'

const Timer = ({ startingTime, name='Unnamed Timer' }) => {
  return(
    <div>
      <h1>10:00</h1>
      <p>{ name }</p>
    </div>
  )
}

export default Timer
