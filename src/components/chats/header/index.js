import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Avatar from 'components/Avatar'



import ChatMenu from './chat_menu'
import UserMenu from './user_menu'
import Modal from './modal'

import styles from 'styles/chats/header'

class ChatHeader extends React.Component {
  state = { isModal: false }

  toggleModal = () => this.setState({ isModal: !this.state.isModal })

  render() {
    const { classes, user, chat, logout, redirect, joinChat, leaveChat, deleteChat, editUser } = this.props

    return (
      <AppBar className={classes.appBar} color="primary">
        <Toolbar color="contrast">
          { chat && <Avatar colorFrom={chat._id} label={chat.title} /> }
          <Typography variant="title" align="left" className={classes.appBarTitleLeft}>

            { !chat &&  "DogeCodes React Chat#1" }
    
            <ChatMenu
              classes={classes}
              chat={chat}
              user={user}
              join={joinChat}
              redirect={redirect}
              leave={leaveChat}
              delete={deleteChat}
            />

          </Typography>
          <Typography variant="title" align="left" className={classes.appBarTitleRight}>

            <UserMenu classes={classes}
              logout={logout}
              edit={editUser}
              toggleModal={this.toggleModal}
              user={user}
            />
          </Typography>

          <Avatar  colorFrom={user._id} label={user.username} />

          <Modal classes={classes}
            on={this.state.isModal}
            toggle={this.toggleModal}
            edit={editUser}
            user={user}
          />
        </Toolbar>
      </AppBar>
    )
  }
};

export default withStyles(styles)(ChatHeader)
