import React, { useState, useEffect, useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { useSelector, useDispatch } from 'react-redux'
import { pauseTimer, resumeTimer, createTimer } from '../../reducers/timer'

const Timer = () => {
  const timerData = useSelector(state => state.timer)
  const [distance, setDistance] = useState(timerData.initialTime)
  const [userTimeInput, setUserTimerInput] = useState(null)
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
  const handleButtonClick = (e) => {
    e.preventDefault()
    const seconds = document.getElementById('imask-input').value.split(':').reverse()
    console.log(seconds)
    let finalNum = 0
    for (let i = seconds.length - 1; i >= 0; i--){
      switch(i){
        case 0:
          finalNum += seconds[i] * 1000
          break
        case 1:
          finalNum += seconds[i] * 60000
          break
        case 2: finalNum += seconds[i] * 3600000
          break
        default:
          break
      }
    }
    dispatch(createTimer(finalNum/60000))
  }

  if (timerData.initialTime === null){
    return(
      <form>
        <IMaskInput
          id='imask-input'
          mask='[00:][00]:00'
          radix="."
          value={userTimeInput}
          signed={true}
          name='pleasework'
          unmask={true} // true|false|'typed'
          //ref={inputRef.current}  // access to nested input
          // DO NOT USE onChange TO HANDLE CHANGES!
          // USE onAccept INSTEAD
          onAccept={
            // depending on prop above first argument is
            // `value` if `unmask=false`,
            // `unmaskedValue` if `unmask=true`,
            // `typedValue` if `unmask='typed'`
            //(value) => console.log(value)
            (value) => setUserTimerInput(value)
          }
          // ...and more mask props in a guide

          // input props also available
          placeholder='00:00:00'
        />
        <button onClick={(e) => handleButtonClick(e)}>submit</button>
      </form>)
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
