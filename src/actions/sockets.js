/* eslint no-underscore-dangle: 0 */
import SocketIOClient from 'socket.io-client'
import types from 'constants/sockets'
import config from 'constants/config'

const missingSocketConnection = () => (
   { type: types.CONNECT_MISSING, payload: new Error('Missing connection!') }
)

let socket = null

const connect = () => (dispatch, getState) => {
  const { services: {serverStatus}, auth: {token} } = getState()

  if (serverStatus[types.CONNECT_REQUEST]) return;

  dispatch({ type: types.CONNECT_REQUEST })
  socket = SocketIOClient(config.socketUrl, { query: { token } })
  if (!socket) return dispatch( missingSocketConnection() );

  const method_type = {
    'connect':        types.CONNECT_SUCCESS,
    'error':          types.CONNECT_FAILURE,
    'connect_error':  types.CONNECT_FAILURE,
    'new-message':    types.GET_MESSAGE,
    'new-chat':       types.NEW_CHAT,
    'deleted-chat':   types.DELETE_CHAT
  }
 
  for(let key in method_type){ socket.on(key, (payload) => dispatch({type: method_type[key], payload})) }
  
    // socket.on('connect', () => dispatch({ type: types.connection.SUCCESS }) )
    // .on('error', (error) => dispatch({ type: types.connection.FAILURE, payload: new Error(`Connection: ${error}`) }) )
    // .on('connect_error', () => dispatch({ type: types.connection.FAILURE, payload: new Error('We have lost a connection :(') }) )
    // .on('new-message', (message) => dispatch({ type: types.RECIEVE_MESSAGE, payload: message }) )
    // .on('new-chat', ({ chat }) => dispatch({ type: types.RECIEVE_NEW_CHAT, payload: { chat } }) )
    // .on('deleted-chat', ({ chat }) => dispatch({ type: types.RECIEVE_DELETED_CHAT, payload: { chat } }) )

  return Promise.resolve()
}



const register = (type, emit) => (payload) => (dispatch, getState) => {
  if (!socket) dispatch(missingSocketConnection());
  socket.emit( emit, payload )
  dispatch({ type: types[type], payload })
 }

export default {
  connect,
  sendMessage: register('SEND_MESSAGE', 'send-message'),
  mountChat:   register('MOUNT_CHAT',   'mount-chat'),
  unmountChat: register('UNMOUNT_CHAT', 'unmout-chat')
}
