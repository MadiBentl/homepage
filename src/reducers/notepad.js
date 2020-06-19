const generateId = () => {
  return Math.round(Math.random() * 9999999999)
}

const initialState = {
  name: 'Notepad',
  date: new Date(),
  content: '',
  visible: false
}
const notepadReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_NOTEPAD':
      return {
        name: 'Notepad',
        visible: true,
        content: ''
      }
    case 'HIDE_NOTEPAD':
      return { ...state, visible: false }
    case 'SHOW_NOTEPAD':
      return { ...state, visible: true }
    case 'TOGGLE_NOTEPAD':
      return { ...state, visible: !state.visible }
    case 'ADD_NOTE':
      return { ...state, notes: state.notes.concat({
        content: action.data.content,
        complete: false,
        id: generateId()
      }) }
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
export const toggleNotepad = () => {
  return({ type: 'TOGGLE_NOTEPAD' })
}

export default notepadReducer
