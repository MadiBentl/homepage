import React from 'react'
import { createTimer, deleteTimer, toggleTimer } from '../reducers/timer'
import { createNotepad, deleteNotepad, addNote } from '../reducers/notepad'
import { setWallpaper } from '../reducers/canvas'
import { useDispatch } from 'react-redux'

const Cli = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    const query = event.target.query.value.split(' ')
    if (query.includes('timer')){
      switch (query[0]){
        case 'create':
          dispatch(createTimer(query[2]))
          break
        case 'delete':
          dispatch(deleteTimer())
          break
        case 'start':
          dispatch(toggleTimer())
          break
        case 'pause':
          dispatch(toggleTimer())
          break
        default:
          break
      }
    }
    else if (query.includes('background') || query.includes('wallpaper')){
      console.log(query[2])
      dispatch(setWallpaper(query[2]))
    }
    else if (query.includes('notepad')){
      if (query[0] === 'create'){
        dispatch(createNotepad())
      }
      else if (query[0] === 'delete'){
        dispatch(deleteNotepad())
      }
    }
    else if (query.includes('note')){
      dispatch(addNote(query.slice(2).join(' ')))
    }
  }
  return(
    <div className='cli ui transparent'>
      <form onSubmit={handleSubmit}>
        <input name='query' placeholder='example: create timer 10'/>
        <button type='submit' className='ui inverted button'>Go</button>
      </form>
    </div>
  )
}
export default Cli
