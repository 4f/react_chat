import PT from 'prop-types'

export const index = (comp) => {
  comp.propTypes = {
    chats:    PT.array,
    myHash:   PT.object,
    create:   PT.func.isRequired,
    chat:     PT.object,
    chat_id:  PT.string,
    user:     PT.object.isRequired
  }
  return comp
}

export const list = (comp) => {
  
  comp.propTypes = {
    classes:  PT.object,
    chats:    PT.array.isRequired,
    user:     PT.object.isRequired,
    active:   PT.object,
    myHash:   PT.object.isRequired
  }
  return comp
}
export const newButton = (comp) => {
  comp.propTypes = {
    classes:  PT.object.isRequired,
    create:   PT.func.isRequired
  }
  return comp
}

export default {
  index,
  list,
  newButton
}
