import PT from 'prop-types'

export const index = (comp) => {
  comp.propTypes = {
    chat:     PT.object,
    classes:  PT.object.isRequired,
    join:     PT.func.isRequired,
    send:     PT.func.isRequired,
    user:     PT.object.isRequired
  }
  return comp
}

export const messages = (comp) => {
  comp.propTypes = {
    chat:     PT.object,
    classes:  PT.object.isRequired,
    user:     PT.object.isRequired
  }
  return comp
}
export const input = (comp) => {
  comp.propTypes = {
    chat:           PT.object,
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
