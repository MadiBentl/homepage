import noteService from '../services/notes'

const generateTempId = () => Math.floor(Math.random() * 99999999)

const initialState = {
  notes: [{content: '', id: generateTempId(), important: false, location: {x:300, y:0}}],
  visible: false
}
const notepadReducer = (state = initialState, action) => {
  switch(action.type){
    case 'HIDE_NOTEPAD':
      return { ...state, visible: false }
    case 'SHOW_NOTEPAD':
      return { ...state, visible: true }
    case 'TOGGLE_NOTEPAD':
      return { ...state, visible: !state.visible }
    case 'GET_NOTES':
      return { ...state, notes: action.data.notes }
    case 'ADD_NOTE':
      return { ...state, notes: state.notes.concat({
        content: action.data.content,
        id: action.data.id,
        important: action.data.important,
        location: action.data.location
      }) }
    case 'EDIT_NOTE':
      return { ...state, notes: state.notes.map(note => {
        if (note.id === action.data.id){
          return { ...note,
            content: action.data.content
          }
        }
        return note
      }) }
    case 'TOGGLE_IMPORTANCE':
      return { ...state, notes: state.notes.map(note => {
        if (note.id === action.data.id){
          return { ...note,
            important: !note.important
          }
        }
        return note
      }) }
    case 'DELETE_NOTE':
      if (state.notes.length === 1){
        return initialState
      }
      return { ...state, notes: state.notes.filter(note => action.data.id !== note.id) }
    case 'DRAG_NOTE':
      return { ...state,
        notes: state.notes.map(note => {
          if (note.id === action.data.id){
            return{
              ...note,
              location: {
                x: action.data.x,
                y: action.data.y
              }
            }
          }
          return note
        })
      }
    case 'LOGOUT': {
      return initialState
    }
    default:
      return state
  }
}

export const fetchNotes = (userId) => {
  return async dispatch => {
    let notes = await noteService.getNotes(userId)
    notes = notes.map(n => {
      if(!n.location){
        return { ...n, location: { x:300, y:0 } }
      }else {
        return { ...n }
      }
    })
    console.log(notes)
    dispatch({ type: 'GET_NOTES', data: { notes } })
  }
}
export const hideNotepad = () => {
  return({ type: 'HIDE_NOTEPAD' })
}
export const showNotepad = () => {
  return({ type: 'SHOW_NOTEPAD' })
}
export const addNote = () => {
  return async dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const user = JSON.parse(loggedInUser)
      const newNote = await noteService.addNote({ content: '', user, location: { x: 300, y: 0 } })
      dispatch({ type: 'ADD_NOTE', data: newNote })
    } else {
      dispatch({ type: 'ADD_NOTE', data: { content: '', location: { x: 300, y: 0 }, important: false, id: generateTempId() } })
    }
  }
}
export const editNote = (content, note) => {
  return async dispatch => {
    const editedNote = await noteService.editNote({ ...note, content })
    dispatch({ type: 'EDIT_NOTE', data: editedNote })
  }
}
export const toggleImportance = (note) => {
  return async dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const toggledImportance = await noteService.editNote({ ...note, importance: !note.importance })
      dispatch({ type: 'TOGGLE_IMPORTANCE', data: { ...toggledImportance } })
    } else{
      dispatch({ type: 'TOGGLE_IMPORTANCE', data: { ...note, important: !note.important } })
    }
  }
}
export const toggleNotepad = () => {
  return async (dispatch) => {
    dispatch({ type: 'TOGGLE_NOTEPAD' })
  }
}
export const dragNote = (note, x, y) => {
  return async dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const draggedNote = await noteService.editNote({ ...note, location: { x, y } })
      dispatch({ type: 'DRAG_NOTE', data: { ...draggedNote } })
    } else {
      dispatch({ type: 'DRAG_NOTE', data: { ...note, location: { x, y } } })
    }
  }
}
export const deleteNote = (id) => {
  return async dispatch =>  {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser){
      await noteService.deleteNote(id)
    }
    dispatch({ type: 'DELETE_NOTE', data: { id } })
  }
}
export default notepadReducer
