import React  from 'react'
import Paper  from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Input  from 'material-ui/Input'

class MessageInput extends React.Component {
  state = { value: '' }

  onChange = (event) => this.setState({ value: event.target.value })

  onKeypress = (event) => {
    const { value } = this.state

    if (event.key === 'Enter' && value) {
      this.props.onSend(value)
      this.setState({ value: '' })
    }
  }

  render() {
    const { classes, on, isJoinButton, onJoin } = this.props
    if(!on) return null;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
            {isJoinButton ? (
          <Button fullWidth variant="raised" color="primary"
            onClick={onJoin}
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

export default MessageInput
