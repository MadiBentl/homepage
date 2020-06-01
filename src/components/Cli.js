import React from 'react'
import { createTimer, deleteTimer, toggleTimer } from '../reducers/timer'
import { createNotepad, deleteNotepad } from '../reducers/notepad'
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
    if (query.includes('background') || query.includes('wallpaper')){
      console.log(query[2])
      dispatch(setWallpaper(query[2]))
    }
    if (query.includes('notepad')){
      if (query[0] === 'create'){
        dispatch(createNotepad())
      }
      else if (query[0] === 'delete'){
        dispatch(deleteNotepad())
      }
    }
  }
  return(
    <div className='cli'>
      <form onSubmit={handleSubmit}>
        <input name='query' />
        <button type='submit'>Go</button>
      </form>
    </div>
  )
}
export default Cli
