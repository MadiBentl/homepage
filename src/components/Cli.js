import React from 'react'
import Downshift from 'downshift'

import { createTimer, deleteTimer, toggleTimer } from '../reducers/timer'
import { createNotepad, deleteNotepad, addNote } from '../reducers/notepad'
import { createTasklist, addTask } from '../reducers/tasklist'
import { setWallpaper } from '../reducers/canvas'
import { useDispatch } from 'react-redux'

const items = [
  { value: 'change background' },
  { value: 'randomize background' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
]

const OldCli = () => {
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
      if(query[2]){
        dispatch(setWallpaper(query[2]))
      }else{
        dispatch(setWallpaper())
      }
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
    else if (query.includes('tasklist')){
      if (query[0] === 'create'){
        dispatch(createTasklist())
      }
    }
    else if (query.includes('task')) {
      if(query[0] === 'add' || query[0] === 'create') {
        dispatch(addTask(query.slice(2).join(' ')))
      }
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

const Cli = () => {
  const dispatch = useDispatch()
  return(<Downshift
    onChange={selection => {
      if (selection) {
        alert(`You selected ${selection.value}`)
      } else {
        alert('selection cleared')
      }
    }}
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className='cli ui transparent'>
        <form>
          <input name='query' placeholder='example: create timer 10' {...getInputProps()} />
          <button type='submit' className='ui inverted button'>Go</button>
        </form>
        <ul {...getMenuProps()}>
          {isOpen
            ? items
              .filter(item => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
                      backgroundColor:
                          highlightedIndex === index ? 'lightgray' : null,
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.value}
                </li>
              ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
)
}
export default Cli
