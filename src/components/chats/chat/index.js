import React from 'react'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
=======
>>>>>>> tmpp
import Messages from './messages'
import InputMessage from './input'

import styles from 'styles/chats/chat'
<<<<<<< HEAD

const Chat = ({ chat, classes, join, send, user }) => (
  <main className={classes.chatLayout}>
    <Messages classes={classes} chat={chat} user={user} />
    <InputMessage classes={classes}
      onSend={(content) => send({_id: chat._id, content: content })}
      on={Boolean(chat)}
=======
import {index as applyPropTypes} from 'prop_types/chats/chat'

const Chat = ({ chat, classes, join, send, user }) => (
  <main className={classes.chatLayout}>
    <Messages chat={chat} user={user} classes={classes} />
    <InputMessage classes={classes}
      send={send}
      chat={chat}
>>>>>>> tmpp
      isJoinButton={!user.isInChat}
      join={join}
    />
  </main>
)

<<<<<<< HEAD
export default withRouter( styles(Chat) )
=======
export default styles( applyPropTypes(Chat) )
>>>>>>> tmpp
