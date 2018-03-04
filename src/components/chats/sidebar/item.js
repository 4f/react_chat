import React from 'react'
import moment from 'moment'
import { withStyles } from 'material-ui'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'components/Avatar'

import styles from 'styles/ChatListItem'

const ChatListItem = ({ classes, title }) => (
  <ListItem button >
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText primary={title} />
  </ListItem>
);

export default withStyles(styles)(ChatListItem)
