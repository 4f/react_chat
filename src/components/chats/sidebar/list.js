import React from 'react'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Item from './item'
import styles from 'styles/ChatList'

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    { chats && chats.length ? list(chats) : <Empty classes={classes} /> }
  </List>
)


const list = (chats) => chats.map((chat) => <Item key={chat.id} {...chat} />)
const Empty = (props) => (
  <Typography variant="subheading" className={props.classes.noChats}>
    There is no chats yet...
  </Typography>
)

export default withStyles(styles)(ChatList)
