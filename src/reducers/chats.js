import { combineReducers } from 'redux'
import types from 'constants/chats'

const initialState = {
  activeId: null,
  list: [],
  myList: [],
  hash: {},
  messages: []
}

const Chat = {
  _chat:  (_chat)  => ( _chat.payload && _chat.payload.chat ) || _chat,
  _chats: (_chats) => ( _chats.payload && _chats.payload.chats ) || _chats,
  id:     (chat)   => Chat._chat(chat)._id,
  remove: (hash, chat) => {
    const newHash = { ...hash }
    delete newHash[Chat.id(chat)]
    return newHash
  },
  normalize: (_chats) => {
    let hash = {}
    Chat._chats(_chats).forEach( (chat) => hash[Chat.id(chat)] = chat )
    return hash
  },
  updateMembers: (state_hash, _chat) => {
    let chat = Chat._chat(_chat)
    state_hash[chat._id].members = chat.members
    return state_hash
  }

}


const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.active:            return Chat.id(action) || null
    // case types.join.SUCCESS:      return Chat.id(action)
    case types.remove.SUCCESS:    return null
    default:                      return state
  }
}

const list = (state = initialState.list, action) => {
  switch (action.type) {
    case types.all.SUCCESS:     return action.payload.chats.map(Chat.id)
    case types.create.SUCCESS:  return [...state, Chat.id(action)]
    case types.remove.SUCCESS:  return state.filter( id => id !== Chat.id(action) )
    default:                    return state
  }
}

const myList = (state = initialState.myList, action) => {
  switch (action.type) {
    case types.my.SUCCESS:      return action.payload.chats.map(Chat.id)
    case types.create.SUCCESS:
    case types.join.SUCCESS:    return [...state, Chat.id(action)]
    case types.leave.SUCCESS:
    case types.remove.SUCCESS:  return state.filter( id => id !== Chat.id(action) )
    default:                    return state
  }
}

const hash = (state = initialState.hash, action) => {
  switch (action.type) {
    // case types.my.SUCCESS:
    case types.join.SUCCESS:
    case types.leave.SUCCESS:   return Chat.updateMembers({...state}, action)
    case types.all.SUCCESS:     return Chat.normalize(action)
    case types.create.SUCCESS:  return { ...state, [Chat.id(action)]: action.payload.chat }
    case types.remove.SUCCESS:  return Chat.remove(state, action)
    default:                    return state
  }
}

const messages = (state = initialState.messages, action) => {
  switch (action.type) {
    case types.join.SUCCESS:
    case types.leave.SUCCESS:
    case types.send.SUCCESS:    return [...state, action.payload.message]
    case types.item.SUCCESS:    return action.payload.chat.messages
    default:                    return state
  }
}


export default combineReducers({
  activeId,
  list,
  myList,
  hash,
  messages
})

export const construct = (state) => ({
  all:    () => state.chats.list.map(id => state.chats.hash[id]),
  active: () => state.chats.hash[state.chats.activeId],
  find:   (id) => state.chats.hash[id]
})
export const getById = (state, id) => state.hash[id]
export const gethash = (state, ids) => ids.map(id => getById(state, id))

