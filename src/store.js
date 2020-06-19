import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import timerReducer from './reducers/timer'
import canvasReducer from './reducers/canvas'
import notepadReducer from './reducers/notepad'
import taskListReducer from './reducers/tasklist'

const reducer = combineReducers({
  canvas: canvasReducer,
  timer: timerReducer,
  notepad: notepadReducer,
  taskList: taskListReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
