
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
const isProduct = process.env.NODE_ENV === 'production'

const urls = isProduct ? {
  apiUrl:    'https://dogecodes-chat-api.herokuapp.com/v1',
  socketUrl: 'wss://dogecodes-chat-api.herokuapp.com/'
} : {
  apiUrl:    'http://localhost:8000/v1',
  socketUrl: 'ws://localhost:8000/'
}

export default urls
