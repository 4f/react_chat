import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import MoreIcon from 'material-ui-icons/MoreVert'

import Avatar from 'components/Avatar'

const ChatListItem = ({ classes, chat, active, user }) => {
  const className = () => ( active && active._id === chat._id ? classes.activeItem : "" )

  
  return (
    <ListItem button
      component={Link}
      to={`/chat/${chat._id}`}
      className={className()}
    >
      <Avatar colorFrom={chat._id} label={chat.title} />
      <MoreIcon className={classes.moreIcon} />
      <ListItemText primary={chat.title} secondary={moment(chat.createdAt).fromNow()} />
    </ListItem>
  )
}

export default ChatListItem
