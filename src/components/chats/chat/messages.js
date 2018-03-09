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
    const { classes, messages, match, user } = this.props
    
    if (!match.params.id)
      return <NoChat classes={classes} />

    if (messages && messages.length)
      return (
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          <List messages={messages} user={user} />
        </div>
      )
    return <Empty />
  }
}

const List = (props) => props.messages.map( (message) => 
  <Message key={message._id} {...message} user={props.user} /> )

const NoChat = ({classes}) => (
  <Paper className={classes.paper}>
    <Typography variant="display1" gutterBottom>
      Start messaging…
    </Typography>
    <Typography variant="body1" gutterBottom>
      Use <strong>Global</strong> to explore communities around here.
    </Typography>
    <Typography variant="body1" gutterBottom>
      Use <strong>Recents</strong> to see your recent conversations.
    </Typography>
  </Paper>
)

const Empty = () => (
  <Typography variant="display1">
    There is no messages yet...
  </Typography>
)


export default withRouter(withStyles(styles)(ChatMessageList))
