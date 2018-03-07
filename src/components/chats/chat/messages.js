import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Message from './message'
import {Messages as styles} from 'styles/chats/chat'

class ChatMessageList extends React.Component {
  componentDidMount() { this.scrollDownHistory() }
  componentDidUpdate() { this.scrollDownHistory() }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper
    if (messagesWrapper) messagesWrapper.scrollTop = messagesWrapper.scrollHeight
  }

  render() {
    const { classes, messages } = this.props
    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        { messages && messages.length ? <List messages={messages}/> : <Empty /> }
    </div>
    )
  }
}

const List = (props) => props.messages.map( (message) => <Message key={message.id} {...message} /> )

const Empty = () => (
  <Typography variant="display1">
    There is no messages yet...
  </Typography>
)


export default withRouter(withStyles(styles)(ChatMessageList))
