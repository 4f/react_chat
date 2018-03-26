import PT from 'prop-types'
import types from 'prop_types/types'

export const index = (comp) => {
  comp.propTypes = {
    chat:     types.chat,
    classes:  PT.object.isRequired,
    join:     PT.func.isRequired,
    send:     PT.func.isRequired,
    user:     types.user.isRequired
  }
  return comp
}

export const messages = (comp) => {
  comp.propTypes = {
    chat:     types.chat,
    classes:  PT.object.isRequired,
    user:     types.user.isRequired
  }
  return comp
}
export const input = (comp) => {
  comp.propTypes = {
    chat:           types.chat,
    send:           PT.func.isRequired,
    join:           PT.func.isRequired,
    isJoinButton:   PT.bool.isRequired
  }
  return comp
}

export default {
  index,
  messages,
  input
}
