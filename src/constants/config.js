
export const redirects = {
  welcome: {
    path:   '/chat',
    isAuth: true
  },
  chats: {
    path:   '/welcome',
    isAuth: false
  }
}

export const apiUrl     = 'http://localhost:8000/v1'
export const socketUrl  = 'ws://localhost:8000'
