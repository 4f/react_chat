import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Messages from './messages'
import InputMessage from './input'

import {Chat as styles} from 'styles/chats/chat'

const Chat = ({ chat, classes, join, send, user }) => (
  <main className={classes.chatLayout}>
    <Messages chat={chat} user={user} />
    <InputMessage
      onSend={(content) => send({_id: chat._id, content: content })}
      on={Boolean(chat)}
      isJoinButton={!user.isInChat}
      onJoin={() => join({_id: chat._id})}
    />
  </main>
)

export default withRouter(withStyles(styles)(Chat))
