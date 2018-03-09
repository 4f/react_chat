import React from 'react'
import Sidebar from './sidebar'
import Chat from 'components/chats/chat'
import Header from 'components/chats/header'

// import { messages } from 'mock-data'




class ChatPage extends React.Component {


  componentDidMount() {
    const { match: { params: {id} }, actions: { Chat: { active, all } } } = this.props

    Promise.all([
      all(),
      // fetchMyChats(),
    ])
      .then(() => { if (id) active({ id }) })
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, actions: {Chat: { active} } } = this.props
    const { params: { id } } = nextProps.match

    if( id && params.id !== id) active({ id })
  }

  render() {
    const {user, chats, chat, actions: { logout, Chat: {join, leave, remove, create, send} }, messages} = this.props
    return (
      <React.Fragment>
        <Header
          logout={logout} 
          user={user}
          chat={chat}
          leaveChat={leave}
          deleteChat={remove}
          // editUser={editUser}
        />
        <Sidebar
          chats={chats}
          create={create}
          chat={chat}
          user={user}
        />
        <Chat
          messages={messages} 
          chat={chat}
          user={user}
          send={send}
          join={join}
        />
      </React.Fragment>
    )
  }
}

export default ChatPage
