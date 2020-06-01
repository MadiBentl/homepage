import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import timerReducer from './reducers/timer'
import canvasReducer from './reducers/canvas'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import App from './App'

const reducer = combineReducers({
  canvas: canvasReducer,
  timer: timerReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'))
}
renderApp()
store.subscribe(renderApp)
