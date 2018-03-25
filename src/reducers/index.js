import { combineReducers } from 'redux'
import auth from './auth'
import chats from './chats'
import services from './services'

export default combineReducers({
  auth,
  chats,
  services
})


export function construct(state){
  const {chats: {chat}, auth: {user} } = state
  const isCreator = user && chat && chat.creator._id === user._id
  const isMember = user && chat && chat.members.some( member => member._id === user._id )

  return {
    getCurrentUser: () => ({ ...user, isCreator, isMember, isInChat: isCreator || isMember }),
  }
}
