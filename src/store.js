import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import timerReducer from './reducers/timer'
import canvasReducer from './reducers/canvas'
import notepadReducer from './reducers/notepad'
import taskListReducer from './reducers/tasklist'
import settingsReducer from './reducers/settings'
import weatherReducer from './reducers/weather'
import adminReducer from './reducers/admin'

const reducer = combineReducers({
  canvas: canvasReducer,
  timer: timerReducer,
  notepad: notepadReducer,
  taskList: taskListReducer,
  settings: settingsReducer,
  weather: weatherReducer,
  admin: adminReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
