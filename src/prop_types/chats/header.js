import PT from 'prop-types'

export const index = (comp) => {
  comp.propTypes = {
    classes:    PT.object,
    user:       PT.object.isRequired,
    chat:       PT.object,
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
    chat:       PT.object.isRequired,
    user:       PT.object.isRequired,
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
    user:        PT.object.isRequired
  }
  return comp
}

export const modal = (comp) => {
  comp.propTypes = {
    classes:     PT.object,
    on:          PT.bool.isRequired,
    toggle:      PT.func.isRequired,
    edit:        PT.func.isRequired,
    user:        PT.object.isRequired
  }
  return comp
}

export default {
  index,
  chatMenu,
  userMenu,
  modal
}
