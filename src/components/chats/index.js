import React from 'react'
import Sidebar from './sidebar'
import Chat from 'components/chats/chat'
import Header from 'components/chats/header'


import { chats, messages } from 'mock-data'



class ChatPage extends React.Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const { logout } = this.props
    return (
      <React.Fragment>
        <Header logout={logout} />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </React.Fragment>
    )
  }
}

export default ChatPage
