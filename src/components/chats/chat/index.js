import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Messages from './messages'
import InputMessage from './input'

import {Chat as styles} from 'styles/chats/chat'

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <Messages messages={messages} />
    <InputMessage />
  </main>
)

export default withRouter(withStyles(styles)(Chat))
