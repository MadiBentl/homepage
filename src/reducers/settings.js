const settings = (state = false, action) => {
  switch (action.type){
    case 'HIDE_MODAL':
      return false
    case 'SHOW_MODAL':
      return true
    case 'TOGGLE_MODAL':
      return !state
    default:
      return state
  }
}

export const hideModal = () => {
  return { type: 'HIDE_MODAL' }
}
export const showModal = () => {
  return { type: 'SHOW_MODAL' }
}
export const toggleModal = () => {
  return { type: 'TOGGLE_MODAL' }
}

export default settings
