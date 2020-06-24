const settings = (state = { visible: false }, action) => {
  switch (action.type){
    case 'HIDE_MODAL':
      return { visible: false }
    case 'SHOW_MODAL':
      return { visible: true }
    case 'TOGGLE_MODAL':
      return { visible: !state.visible }
    default:
      return state
  }
}


export const showModal = () => {
  return ({ type: 'SHOW_MODAL' })
}
export const toggleModal = () => {
  return ({ type: 'TOGGLE_MODAL' })
}

export const hideModal = () => {
  return ({ type: 'HIDE_MODAL' })
}
export default settings
