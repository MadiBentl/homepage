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
        content: action.content,
        status: 'incomplete'
      }) }
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
  return({ type: 'ADD_NOTE', content })
}

export default notepadReducer
