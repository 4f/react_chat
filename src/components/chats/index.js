import React from 'react'
import Sidebar from './sidebar'
import Chat from 'components/chats/chat'
import Header from 'components/chats/header'
// import { messages } from 'mock-data'

class ChatPage extends React.Component {
  componentWillMount() {
    const { actions: { Chat: { all }, Socket: {connect} } } = this.props
    connect()
    all()
  }
  componentWillReceiveProps({ match: { params: { _id } } }) {
    this.props.actions.Chat.active({ _id })
  }
  
  render() {
    const { user, chats, myHash, chat, actions: { logout, redirect, userEdit, Chat: {join, leave, create, send, remove} } } = this.props
    return (
      <React.Fragment>
        <Header
          logout={logout} 
          user={user}
          chat={chat}
          leaveChat={leave}
          joinChat={join}
          redirect={redirect}
          deleteChat={remove}
          editUser={userEdit}
        />
        <Sidebar
          chats={chats}
          myHash={myHash}
          create={create}
          chat={chat}
          chat_id={this.props.match.params._id}
          user={user}
          join={join}
          remove={remove}
          leave={leave}
        />
        <Chat
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
