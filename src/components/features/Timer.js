import React, { useState, useEffect } from 'react'
import { IMaskInput } from 'react-imask'
import { useSelector, useDispatch } from 'react-redux'
import { pauseTimer, resumeTimer, createTimer, stopTimer } from '../../reducers/timer'

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
      interval = setInterval(function(){
        const startingTime = new Date().getTime()
        const finishedTime = (timerData.initialTime) + now
        setDistance(finishedTime - startingTime)

        if (finishedTime - startingTime <= 1000){
          dispatch(stopTimer())
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
      <div className = 'feature timer sidebar'>
        <form onSubmit = {(e) => handleButtonClick(e)}>
          <IMaskInput
            id='imask-input'
            mask='[00:][00]:00'
            radix="."
            value={userTimeInput}
            signed={true}
            unmask={true}
            onAccept={
              (value) => setUserTimerInput(value)
            }
            autoComplete="off"
            // ...and more mask props in a guide

            // input props also available
            placeholder='00:00:00'
          />
        </form>
        <p>Enter Time</p>
      </div>)
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
