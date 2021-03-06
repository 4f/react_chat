
export default {
  CONNECT_MISSING: Symbol('SOCKETS/CONNECT_MISSING'),
  CONNECT_REQUEST: Symbol('SOCKETS/CONNECT_REQUEST'),
  CONNECT_FAILURE: Symbol('SOCKETS/CONNECT_FAILURE'),
  CONNECT_SUCCESS: Symbol('SOCKETS/CONNECT_SUCCESS'),
  MOUNT_CHAT:      Symbol('sockets/MOUNT_CHAT'),
  UNMOUNT_CHAT:    Symbol('sockets/UNMOUNT_CHAT'),
  SEND_MESSAGE:    Symbol('sockets/SEND_MESSAGE'),
  GET_MESSAGE:     Symbol('sockets/GET_MESSAGE'),
  NEW_CHAT:        Symbol('sockets/GET_NEW_CHAT'),
  DELETE_CHAT:     Symbol('sockets/DELETED_CHAT')
}
