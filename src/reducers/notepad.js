const generateId = () => {
  return Math.round(Math.random() * 9999999999)
}

const notepadReducer = (state = {}, action) => {
  switch(action.type){
  case 'CREATE_NOTEPAD':
    return {
      name: 'Notepad',
      visible: true,
      notes: []
    }
  case 'DELETE_NOTEPAD':
    return {}
  case 'HIDE_NOTEPAD':
    return { ...state, visible: false }
  case 'SHOW_NOTEPAD':
    return { ...state, visible: true }
  case 'ADD_NOTE':
    return { ...state, notes: state.notes.concat({
      content: action.data.content,
      complete: false,
      id: generateId()
    }) }
  case 'TOGGLE_STATUS':
    const noteToToggle = state.notes.find(n => n.id === action.data.id)
    const toggledNote = {
      ...noteToToggle,
      complete: !noteToToggle.complete
    }
    console.log('toggled', toggledNote)
    const newNotes = state.notes.map(n =>
      n.id === action.data.id ? toggledNote : n
    )
    console.log(newNotes)
    return { ...state, notes: newNotes }
  default:
    return state
  }
}

export const createNotepad = () => {
  return({ type: 'CREATE_NOTEPAD' })
}
export const deleteNotepad = () => {
  return({ type: 'DELETE_NOTEPAD' })
}
export const hideNotepad = () => {
  return({ type: 'HIDE_NOTEPAD' })
}
export const showNotepad = () => {
  return({ type: 'SHOW_NOTEPAD' })
}
export const addNote = (content) => {
  return({ type: 'ADD_NOTE', data:{ content } })
}
export const toggleNoteStatus = (id) => {
  return({ type: 'TOGGLE_STATUS', data:{ id } })
}

export default notepadReducer
