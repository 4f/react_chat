import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'

import {Input as styles} from 'styles/chats/chat'

class MessageInput extends React.Component {
  state = { value: '' }

  handleValueChange = (event) => this.setState({ value: event.target.value })

  render() {
    const { classes } = this.props

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          <Input
            fullWidth
            placeholder="Type your message…"
            value={this.state.value}
            onChange={this.handleValueChange}
          />
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(MessageInput)
