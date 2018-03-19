import React from 'react'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Item from './item'

const ChatList = ({ classes, chats, user, active, disabled, myHash }) => (
  <List className={classes.chatsList}>
    { chats && chats.length
      ? 
        chats.map((chat) => 
      <Item
        key={chat._id}
        classes={classes}
        chat={chat}
        active={active}
        user={user}
        member={myHash[chat._id]}
        disabled={disabled} />)
      :
      <Empty classes={classes} /> }
  </List>
)


const Empty = (props) => (
  <Typography variant="subheading" className={props.classes.noChats}>
    There is no chats yet...
  </Typography>
)

export default ChatList
