import React from 'react'
import { createTimer, deleteTimer, resetTimer } from '../reducers/timer'
import { useDispatch } from 'react-redux'
const Cli = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    const query = event.target.query.value.split(' ')
    //timer
    if (query[0] === 'create'){
      dispatch(createTimer(20))
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
