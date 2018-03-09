import React from 'react'
import moment from 'moment'
import { withStyles } from 'material-ui'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'components/Avatar'

import {Item as styles} from 'styles/chats/sidebar'


const ChatListItem = ({ classes, chat, active, user }) => {
  const className = () => ( active && active._id === chat._id && classes.activeItem )

  
  return (
    <ListItem button
      component={Link}
      to={`/chat/${chat._id}`}
      className={className()}
    >
      <Avatar colorFrom={chat._id} label={chat.title} />
      <ListItemText primary={chat.title} secondary={moment(chat.createdAt).fromNow()} />
    </ListItem>
  )
}

export default withStyles(styles)(ChatListItem)
