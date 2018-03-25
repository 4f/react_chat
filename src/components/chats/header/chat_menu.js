import React from 'react'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'
import Leave from 'material-ui-icons/ExitToApp'
import Join from 'material-ui-icons/CallMerge'
import Root from 'material-ui-icons/FileUpload'
import Delete from 'material-ui-icons/Delete'

import { chatMenu as applyPropTypes } from 'prop_types/chats/header'

class ChatMenu extends React.Component {
  state = { anchorEl: null }

  open = (event) => {
    clearTimeout(this.stClose)
    this.setState({ anchorEl: event.currentTarget })
  }
  timeOpen = (event) => {
    clearTimeout(this.stClose)
    const el = { currentTarget: event.currentTarget }
    this.stOpen = setTimeout(() => { this.open(el) }, 400)
  }
  close = () => {
    clearTimeout(this.stOpen)
    this.setState({ anchorEl: null })
  }

  timeClose = () => {
    clearTimeout(this.stOpen)
    this.stClose = setTimeout(this.close, 1000)
  }

  leave = () => {
    this.close()
    this.props.leave({_id: this.props.chat._id})
  }

  remove = () => {
    this.close()
    this.props.delete({_id: this.props.chat._id})
  }

  root = () => {
    this.close()
    this.props.redirect("/chat")
  }

  join = () => {
    this.close()
    this.props.join({ _id: this.props.chat._id })
  }

  render() {
    const { user, chat, classes } = this.props
    const { anchorEl } = this.state
    console.log("HEAD", this.props)
    debugger


    return (
      <React.Fragment>
        <Button size="small" color="inherit" aria-haspopup="true"
          className={classes.menuButton}
          onMouseOver={this.timeOpen}
          onMouseLeave={this.timeClose}
          aria-owns={anchorEl ? 'simple-menu' : null}
        >
          < MoreIcon />
        </Button>

        { chat.title }

        <Menu id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            disabled={!user.isMember}
            onClick={this.leave}
          > <Leave /> Leave </MenuItem>
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            disabled={!user.isCreator}
            onClick={this.remove}
          > <Delete /> Delete </MenuItem>
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            disabled={user.isInChat}
            onClick={this.join}
          > <Join /> Join </MenuItem>
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            onClick={this.root}
          > <Root /> Go to Root </MenuItem>

        </Menu>
      </React.Fragment>
    )
  }
}

export default applyPropTypes( ChatMenu )
