import { combineReducers } from 'redux'
import types from 'constants/chats'
import sockets from 'constants/sockets'
import auth from 'constants/auth'

const initialState = {
  chat: null,
  list: [],
  myHash: {user_id: null},
  hash: {}
}

const Message = {
  _message: (_message) => (_message.payload && _message.payload.message) || _message,
  chatId: (_message) => Message._message(_message).chatId
}
const Chat = {
  _chat:     (_chat)  => ( _chat.payload && _chat.payload.chat ) || _chat.payload || _chat,
  _chats:    (_chats) => ( _chats.payload && _chats.payload.chats ) || _chats,
  id:        (_chat)   => Chat._chat(_chat)._id,
  isMember:  (_chat, user_id) => Chat._chat(_chat).members.some(member => member._id === user_id),
  isCreator: (_chat, user_id) => Chat._chat(_chat).creator._id === user_id,
  remove:    (hash, chat) => {
    const newHash = { ...hash }
    delete newHash[Chat.id(chat)]
    return newHash
  },
  normalize: (_chats) => {
    let hash = {}
    Chat._chats(_chats).forEach( (chat) => hash[Chat.id(chat)] = chat )
    return hash
  },
  filterMy: (_chats, user_id) => {
    let hash = {user_id}
    Chat._chats(_chats).forEach((chat) => 
      hash[Chat.id(chat)] = Chat.isCreator(chat, user_id) || Chat.isMember(chat, user_id) )
    return hash
  },
  updateWithMessage: (chat, _chat) => {
    let chat2 = Chat._chat(_chat)
    if ( chat._id !== chat2._id ) return chat
    chat2 = {...chat2}
    chat2.messages = (chat.messages || []).concat(Message._message(_chat))
    // message count ?
    return chat2
  },

  updateByChat: (out_state_hash, _chat) => {
    const chat = Chat._chat(_chat)
    out_state_hash[chat._id] = chat
    return out_state_hash
  },
  updateMembers: (state_chat, _chat) => {
    const chat = Chat._chat(_chat)
    if (state_chat._id !== chat._id) return state_chat;
    let out_state = { ...state_chat }
    out_state.members = chat.members
    return out_state
  },
  updateMessage: (state_chat, _message) => {
    if ( state_chat._id !== Message.chatId(_message) )
      return state_chat
    let ret_state = {...state_chat}
    ret_state.messages = (ret_state.messages || []).concat(Message._message(_message))
    ret_state.message += 1
    return ret_state
  }
}


const chat = (state = initialState.chat, action) => {
  switch (action.type) {
    case types.active:          return action.payload._id ? state : 0
    case types.get.SUCCESS:     return Chat._chat(action)
    case types.join.SUCCESS:
    case types.leave.SUCCESS:   return Chat.updateMembers(state, action)
    case sockets.DELETE_CHAT:   return state && state._id === Chat.id(action) ? 0 : state
    // case types.remove.SUCCESS:  return state && state._id === Chat.id(action) ? null : chat
    case sockets.GET_MESSAGE:   return Chat.updateMessage(state, action)
    // case types.send.SUCCESS:    
    default:                    return state
  }
}

const list = (state = initialState.list, action) => {
  switch (action.type) {
    case types.all.SUCCESS:     return action.payload.chats.map(Chat.id)
    case sockets.NEW_CHAT:      return [...state, Chat.id(action)]
    // case types.create.SUCCESS:  return [...state, Chat.id(action)]
    case sockets.DELETE_CHAT:   return state.filter( id => id !== Chat.id(action) )
    // case types.remove.SUCCESS:  return state.filter( id => id !== Chat.id(action) )
    default:                    return state
  }
}

const myHash = (state = initialState.myHash, action) => {
  switch (action.type) {
    // case types.my.SUCCESS:      return action.payload.chats.map(Chat.id)
    // case types.auth.
    case auth.signup.SUCCESS:
    case auth.session.SUCCESS:
    case auth.login.SUCCESS:    return {user_id: action.payload.user._id}

    case types.create.SUCCESS:
    case types.join.SUCCESS:    return {...state, [Chat.id(action)]: true}
    case types.all.SUCCESS:     return Chat.filterMy(action, state.user_id)
    case types.leave.SUCCESS:
    case sockets.DELETE_CHAT:   return Chat.remove(state, action)
    // case types.remove.SUCCESS:  return Chat.remove(state, action)
    default:                    return state
  }
}

const hash = (state = initialState.hash, action) => {
  switch (action.type) {
    case types.join.SUCCESS:
    case types.leave.SUCCESS:   return Chat.updateByChat({...state}, action)
    case types.all.SUCCESS:     return Chat.normalize(action)
    case sockets.NEW_CHAT:      return { ...state, [Chat.id(action)]: action.payload.chat }
    // case types.create.SUCCESS:  return { ...state, [Chat.id(action)]: action.payload.chat }
    case sockets.DELETE_CHAT:   return Chat.remove(state, action)
    // case types.remove.SUCCESS:  return Chat.remove(state, action)
    default:                    return state
  }
}


export default combineReducers({
  chat,
  list,
  myHash,
  hash
})

export const construct = (state) => ({
  all:      () => state.chats.list.map(id => state.chats.hash[id]),
  active:   () => state.chats.chat,
  find:   (id) => state.chats.hash[id],
  my:       () => state.chats.myHash
})
export const getById = (state, id) => state.hash[id]
export const gethash = (state, ids) => ids.map(id => getById(state, id))

