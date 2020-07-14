const generateId = () => {
  return Math.round(Math.random() * 9999999999)
}

const initialState = {
  notes: [{
    name: 'Notepad',
    content: '',
    id: generateId()
  }],
  visible: false
}
const notepadReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_NOTEPAD':
      return { ...state, visible: true }
    case 'HIDE_NOTEPAD':
      return { ...state, visible: false }
    case 'SHOW_NOTEPAD':
      return { ...state, visible: true }
    case 'TOGGLE_NOTEPAD':
      return { ...state, visible: !state.visible }
    case 'ADD_NOTE':
      return { ...state, notes: state.notes.concat({
        content: action.data.content,
        id: generateId()
      }) }
    case 'EDIT_NOTE':
      return state.notes.map(note => {
        if (note.id === action.data.id){
          note.content = action.data.content
        }
      })
    default:
      return state
  }
}

export const createNotepad = () => {
  return({ type: 'CREATE_NOTEPAD' })
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
export const editNote = (content, id) => {
  return ({ type: 'EDIT_NOTE', data: { content, id } })
}
export const toggleNotepad = () => {
  return({ type: 'TOGGLE_NOTEPAD' })
}

export default notepadReducer
