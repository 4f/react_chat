import PT from 'prop-types'
import types from 'prop_types/types'


export const index = (comp) => {
  comp.propTypes = {
    classes:    PT.object,
    user:       types.user.isRequired,
    chat:       types.chat,
    logout:     PT.func.isRequired,
    redirect:   PT.func.isRequired,
    joinChat:   PT.func.isRequired,
    leaveChat:  PT.func.isRequired,
    deleteChat: PT.func.isRequired,
    editUser :  PT.func.isRequired
  }
  return comp
}

export const chatMenu = (comp) => {
  comp.propTypes = {
    classes:    PT.object,
    chat:       types.chat.isRequired,
    user:       types.user.isRequired,
    join:       PT.func.isRequired,
    redirect:   PT.func.isRequired,
    leave:      PT.func.isRequired,
    delete:     PT.func.isRequired
  }
  return comp
}

export const userMenu = (comp) => {
  comp.propTypes = {
    classes:     PT.object,
    logout:      PT.func.isRequired,
    edit:        PT.func.isRequired,
    toggleModal: PT.func.isRequired,
    user:        types.user.isRequired
  }
  return comp
}

export const modal = (comp) => {
  comp.propTypes = {
    classes:     PT.object,
    on:          PT.bool.isRequired,
    toggle:      PT.func.isRequired,
    edit:        PT.func.isRequired,
    user:        types.user.isRequired
  }
  return comp
}

export default {
  index,
  chatMenu,
  userMenu,
  modal
}
