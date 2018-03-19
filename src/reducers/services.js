import { combineReducers } from 'redux'
import {server} from 'constants/services'
import sockets from 'constants/sockets'

const message = ({ payload: {message} }) => (
  {message: message && message.content || message}
)

const intialState = {
  serverStatus: {},
  notify: {
    error:   { message: null },
    success: { message: null },
  },
  isSocket: false
}

export const serverStatus = (state = intialState.serverStatus, action) => {
  switch (action.type) {
    case server.REQUEST:    return { ...state, [action.payload.type]: true }
    case server.FAILURE:                  
    case server.SUCCESS:    return { ...state, [action.payload.type]: false }
    default:                return state
  }
}

export const notify = (state = intialState.notify, action) => {
  if (action.success) console.log("SUCCESS", action)
  
  if( action.error ){
     console.log("ERROR", action)
     return {...state, error: message(action) }
  }
  if (action.success) return { ...state, success: message(action) };
  switch (action.type) {
    // case types.sockets.CONNECT_FAILURE:
    // case types.sockets.CONNECT_SUCCESS:
    default:                                return state
  }
}

export const isSocket = (state = intialState.isSocket, action) => {
  switch (action.type) {
    case sockets.CONNECT_MISSING:
    case sockets.CONNECT_FAILURE:  return false
    case sockets.CONNECT_SUCCESS:  return true
    default:                             return state
  }
}

export default combineReducers({
  serverStatus,
  notify,
  isSocket
})
