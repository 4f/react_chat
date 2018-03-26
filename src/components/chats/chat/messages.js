import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Message from './message';

import { messages as applyPropTypes } from 'prop_types/chats/chat';

class ChatMessageList extends React.Component {
  componentDidMount() { this.scrollDownHistory(); }
  componentDidUpdate() { this.scrollDownHistory(); }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
  }

  render() {
    const { classes, chat, user } = this.props;
    if (!chat) { return <NoChat classes={classes} />; } else
    if (chat.messages && chat.messages.length) {
      return (
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          <List messages={chat.messages} classes={classes} user={user} />
        </div>);
    }
    return <Empty />;
  }
}

const List = props => props.messages.map(message =>
  <Message key={message._id} {...message} user={props.user} classes={props.classes} />);

const NoChat = ({ classes }) => (
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
);

const Empty = () => (
  <Typography variant="display1">
    There is no messages yet...
  </Typography>
);


export default applyPropTypes(ChatMessageList);
