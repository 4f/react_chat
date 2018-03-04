import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Messages from './messages'
import InputMessage from './input'

import styles from 'styles/Chat'

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <Messages messages={messages} />
    <InputMessage />
  </main>
)

export default withRouter(withStyles(styles)(Chat))
