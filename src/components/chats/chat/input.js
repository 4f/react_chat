<<<<<<< HEAD
import React  from 'react'
import Paper  from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Input  from 'material-ui/Input'
=======
import React from 'react'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'

import { input as applyPropTypes } from 'prop_types/chats/chat'

>>>>>>> tmpp

class MessageInput extends React.Component {
  state = { value: '' }

  onChange = (event) => this.setState({ value: event.target.value })
  send     = (content) => this.props.send({ _id: this.props.chat._id, content })
  join     = () => this.props.join({ _id: this.props.chat._id })


  onKeypress = (event) => {
    const { value } = this.state

    if (event.key === 'Enter' && value) {
      this.send(value)
      this.setState({ value: '' })
    }
  }

  render() {
    const { classes, chat, isJoinButton } = this.props
    if ( !chat ) return null;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
            {isJoinButton ? (
          <Button fullWidth variant="raised" color="primary"
            onClick={this.join}
          >
            Join
          </Button> ) 
            : (
          <Input fullWidth
            placeholder="Type your message…"
            value={this.state.value}
            onChange={this.onChange}
            onKeyPress={this.onKeypress}
          />
            )}
        </Paper>
      </div>
    )
  }
}

<<<<<<< HEAD
export default MessageInput
=======
export default applyPropTypes( MessageInput )
>>>>>>> tmpp
