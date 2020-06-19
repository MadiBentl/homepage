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
  { value: 'set timer' },
  { value: 'show timer' },
  { value: 'delete timer' },
  { value: 'hide timer' },
  { value: 'create tasklist' },
  { value: 'show weather' }
]

const Cli = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return(
    <Downshift
      onChange={selection => {
        if (selection) {
          switch(selection.value){
            case 'randomize background':
              dispatch(setWallpaper())
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
              dispatch(getWeather('94', '-129'))
              break
            default:
              break
          }
        }
      }}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div className='cli ui transparent'>
          <div className='ui relaxed divided list cli-options' {...getMenuProps()}>
            {isOpen
              ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <div className='item'
                    key={ item.value }
                    {...getItemProps({
                      index,
                      item,
                      style: {
                        backgroundColor:
                        highlightedIndex === index ? 'rgba(255, 255, 255, 0.3)' : null,
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </div>
                ))
              : null}
          </div>
          <form onSubmit = {handleSubmit}>
            <input name='query' placeholder='example: create timer 10' {...getInputProps()} />
            <button type='submit' className='ui inverted button'>Go</button>
          </form>

        </div>
      )}
    </Downshift>
  )
}
export default Cli
