import React from 'react'

const Cli = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.query.value)
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
