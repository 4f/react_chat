import React from 'react'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Message from './message'
=======
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Message from './message'

import { messages as applyPropTypes } from 'prop_types/chats/chat'
>>>>>>> tmpp

class ChatMessageList extends React.Component {
  componentDidMount() { this.scrollDownHistory() }
  componentDidUpdate() { this.scrollDownHistory() }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper
    if (messagesWrapper) messagesWrapper.scrollTop = messagesWrapper.scrollHeight
  }

  render() {
    const { classes, chat, user } = this.props
    if (!chat)
      return <NoChat classes={classes} />
      else
        if( chat.messages && chat.messages.length )
          return (
            <div className={classes.messagesWrapper} ref="messagesWrapper">
<<<<<<< HEAD
              <List classes={classes} messages={chat.messages} user={user} />
=======
              <List messages={chat.messages} classes={classes} user={user} />
>>>>>>> tmpp
            </div> )
        else
          return <Empty />
  }
}

const List = (props) => props.messages.map( (message) => 
<<<<<<< HEAD
  <Message key={message._id} classes={props.classes} {...message} user={props.user} /> )
=======
  <Message key={message._id} {...message} user={props.user} classes={props.classes} /> )
>>>>>>> tmpp

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


<<<<<<< HEAD
export default withRouter( ChatMessageList )
=======
export default applyPropTypes( ChatMessageList )
>>>>>>> tmpp
