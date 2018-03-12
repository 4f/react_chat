import React from 'react'
import Sidebar from './sidebar'
import Chat from 'components/chats/chat'
import Header from 'components/chats/header'
// import { messages } from 'mock-data'

class ChatPage extends React.Component {
  componentWillMount() {
    const { match: { params: {_id} }, actions: { Chat: { active, all } } } = this.props
    all().then(() => { if (_id) active({ _id }) })
  }
  componentWillReceiveProps({ match: { params: { _id } } }) {
    const { match: { params }, actions: {Chat: { active } } } = this.props
    if( _id && params._id !== _id) active({ _id })
  }
  onRemove(playload) {
    const { actions: {Chat: { remove }, redirect } } = this.props
    remove(playload).then( ()=> redirect('/chat') )
  }
  
  render() {
    const { user, chats, myHash, chat, actions: { logout, redirect, userEdit, Chat: {join, leave, create, send} } } = this.props
    return (
      <React.Fragment>
        <Header
          logout={logout} 
          user={user}
          chat={chat}
          leaveChat={leave}
          joinChat={join}
          redirect={redirect}
          deleteChat={ (playload) => this.onRemove(playload) }
          editUser={userEdit}
        />
        <Sidebar
          chats={chats}
          myHash={myHash}
          create={create}
          chat={chat}
          user={user}
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
