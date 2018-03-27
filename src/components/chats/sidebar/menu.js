import React from 'react'
import Button from 'material-ui/Button'
import Menu, { MenuItem, MenuList } from 'material-ui/Menu'
// import AccountCircle from 'material-ui-icons/AccountCircle'
import MoreIcon from 'material-ui-icons/MoreVert'

import { ListItemIcon, ListItemText } from 'material-ui/List'

import Leave from 'material-ui-icons/ExitToApp'
import Join from 'material-ui-icons/CallMerge'
import Root from 'material-ui-icons/FileUpload'
import Delete from 'material-ui-icons/Delete'

import Divider from 'material-ui/Divider'

import Avatar from 'components/ava'

// import { userMenu as applyPropTypes } from 'prop_types/chats/header'

class ChatListMenu extends React.Component {
  onLeave = () => {
    this.props.leave({ _id: this.props.chat._id })
    this.props.close()
  }
  onRemove = () => {
    this.props.remove({ _id: this.props.chat._id })
    this.props.close()
  }
  onJoin = () => {
    this.props.join({ _id: this.props.chat._id })
    this.props.close()
  }
  isCreator = () => this.props.chat && this.props.chat.creator._id === this.props.user._id
  isMember = () => this.props.chat && this.props.myHash[this.props.chat._id]
  isInChat  = () => this.isMember() || this.isCreator()

  render() {
    const {el, user, chat, close, classes } = this.props

    return (
      <Menu id="simple-menu" anchorEl={el} open={Boolean(el)} onClose={close}>
        <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
          disabled={!this.isMember()}
          onClick={this.onLeave}
        > <Leave /> Leave </MenuItem>
        <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
          disabled={!this.isCreator()}
          onClick={this.onRemove}
        > <Delete /> Delete </MenuItem>
        <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
          disabled={this.isInChat()}
          onClick={this.onJoin}
        > <Join /> Join </MenuItem>
          ( chat.members.length && 
        <Divider /> )
          { chat && chat.members.map(m => 
        <MenuItem key={m._id} >
          <Avatar colorFrom={m.username} label={m.username} className={classes.smallAva} />
          <div className={classes.menuName}>
            {m.username}
          </div>
        </MenuItem>
          )}

      </Menu>
    )
  }
}

export default (ChatListMenu)
