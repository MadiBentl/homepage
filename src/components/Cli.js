import React, { useState } from 'react'
import Downshift from 'downshift'
import { useDispatch } from 'react-redux'

import { createTimer, deleteTimer, toggleTimer } from '../reducers/timer'
import { createNotepad, deleteNotepad, addNote } from '../reducers/notepad'
import { createTasklist, addTask } from '../reducers/tasklist'
import { getWeather } from '../reducers/weather'
import { setWallpaper } from '../reducers/canvas'

const items = [
  { value: 'change background' },
  { value: 'randomize background' },
  { value: 'next background' },
  { value: 'set timer' },
  { value: 'show timer' },
  { value: 'delete timer' },
  { value: 'hide timer' },
  { value: 'create tasklist' },
  { value: 'show weather' }
]

const Cli = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    switch(query){
      case 'randomize background':
        dispatch(setWallpaper())
        break
      case 'change background':
        dispatch(setWallpaper())
        break
      case 'set timer':
        dispatch(createTimer(20))
        break
      case 'hide timer':
        dispatch(toggleTimer())
        break
      case 'show timer':
        dispatch(toggleTimer())
        break
      case 'create tasklist':
        dispatch(createTasklist())
        break
      case 'show weather':
        dispatch(getWeather('94', '129'))
        break
      default:
        break
    }
  }
  return(
    <div className='cli ui transparent'>
      <div className='ui relaxed divided list cli-options'>
        {query.length
          ? items
            .filter(item => !query || item.value.includes(query))
            .map((item, index) => (
              <div className='item'
                key={ item.value }
                index={ index }
              >
                {item.value}
              </div>
            ))
          : null}
      </div>
      <form onSubmit = {handleSubmit}>
        <input
          name='query'
          value={query}
          placeholder='example: create timer 10'
          onChange={e => setQuery(e.target.value)}/>
        <button type='submit' className='ui inverted button'>Go</button>
      </form>
    </div>
  )
}
export default Cli

/*
switch(selection.value){
  case 'randomize background':
    dispatch(setWallpaper())
    break
  case 'change background':
    break
  case 'set timer':
    console.log('selection', selection)
    dispatch(createTimer(20))
    break
  case 'hide timer':
    dispatch(toggleTimer())
    break
  case 'show timer':
    dispatch(toggleTimer())
    break
  case 'create tasklist':
    dispatch(createTasklist())
    break
  case 'show weather':
    dispatch(getWeather('94', '129'))
    break
  default:
    break
}
*/
