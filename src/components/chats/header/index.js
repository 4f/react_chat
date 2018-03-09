import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Avatar from 'components/Avatar'
import ChatMenu from './menu'
import UserMenu from './user_menu'

import {Header as styles} from 'styles/chats/header'

class ChatHeader extends React.Component {
  render() {
    const { classes, user, chat, logout, leaveChat, deleteChat, editUser } = this.props

    return (
      <AppBar className={classes.appBar} color="primary">
        <Toolbar color="contrast">
          {chat && 
          <Avatar colorFrom={chat._id} label={chat.title} /> }
          <Typography variant="title" className={classes.appBarTitle}>
            <ChatMenu chat={chat} user={user} leave={leaveChat} delete={deleteChat} />
          </Typography>
          <UserMenu user={user} logout={logout} edit={editUser} />
        </Toolbar>
      </AppBar>
    )
  }
};

export default withStyles(styles)(ChatHeader)
