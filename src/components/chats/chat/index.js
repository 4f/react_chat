import React from 'react'
import Messages from './messages'
import InputMessage from './input'

import styles from 'styles/chats/chat'

const Chat = ({ chat, classes, join, send, user }) => (
  <main className={classes.chatLayout}>
    <Messages chat={chat} user={user} classes={classes} />
    <InputMessage classes={classes}
      onSend={(content) => send({_id: chat._id, content: content })}
      on={Boolean(chat)}
      isJoinButton={!user.isInChat}
      onJoin={() => join({_id: chat._id})}
    />
  </main>
)

export default styles(Chat)
