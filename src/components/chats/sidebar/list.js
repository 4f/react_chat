import React from 'react'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Item from './item'

const ChatList = ({ classes, chats, user, active }) => (
  <List className={classes.chatsList}>
    { chats && chats.length
      ? 
      chats.map((chat) => 
        <Item key={chat._id} classes={classes} chat={chat} active={active} user={user}/>)
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
