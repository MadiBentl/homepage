import noteService from '../services/notes'

const initialState = {
  notes: [],
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
    default:
      return state
  }
}
export const fetchNotes = () => {
  return async dispatch => {
    let notes = await noteService.getNotes()
    notes = notes.map(n => {
      if(!n.location){
        return { ...n, location: { x:0, y:0 } }
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
    const newNote = await noteService.addNote({ content: '', location: { x: 0, y: 0 } })
    console.log(newNote)
    dispatch({ type: 'ADD_NOTE', data: newNote })
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
    const toggledImportance = await noteService.editNote({ ...note, importance: !note.importance })
    dispatch({ type: 'TOGGLE_IMPORTANCE', data: { ...toggledImportance } })
  }
}
export const toggleNotepad = () => {
  return async (dispatch) => {
    dispatch({ type: 'TOGGLE_NOTEPAD' })
  }
}
export const dragNote = (note, x, y) => {
  return async dispatch => {
    const draggedNote = await noteService.editNote({ ...note, location: { x, y } })
    dispatch({ type: 'DRAG_NOTE', data: { ...draggedNote } })
  }
}
export const deleteNote = (id) => {
  return async dispatch =>  {
    await noteService.deleteNote(id)
    dispatch({ type: 'DELETE_NOTE', data: { id } })
  }
}
export default notepadReducer
