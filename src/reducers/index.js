import { combineReducers } from 'redux'
import auth from './auth'
import chats from './chats'

export default combineReducers({
  auth,
  chats
})


export function construct(state){
  const activeChat = () => state.chats.hash[state.chats.activeId]

  const isCreator = () => {
    try {
      return activeChat().creator._id === state.auth.user._id
    } catch (e) {
      return false
    }
  }

  const isMember = () => {
    try {
      return activeChat().members.some( member => member._id === state.auth.user._id )
    } catch (e) {
      return false
    }
  }
  return {
    getCurrentUser: () => ({
      ...state.auth.user,
      isCreator: isCreator(),
      isMember: isMember(),
      isInChat: isCreator() || isMember()
    }),
  }
  

}
