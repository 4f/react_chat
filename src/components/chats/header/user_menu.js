import React from 'react'
import Button from 'material-ui/Button'
import Menu, { MenuItem, MenuList } from 'material-ui/Menu'
// import AccountCircle from 'material-ui-icons/AccountCircle'
import MoreIcon from 'material-ui-icons/MoreVert'

import { ListItemIcon, ListItemText } from 'material-ui/List'

import InboxIcon from 'material-ui-icons/ExitToApp'
import DraftsIcon from 'material-ui-icons/Edit'

import Avatar from 'components/Avatar'


class UserMenu extends React.Component {
  state = { anchorEl: null }

  open = (event) => {
    clearTimeout(this.stClose)
    this.setState({ anchorEl: event.currentTarget })
  }
  timeOpen = (event) => {
    clearTimeout(this.stClose)
    const el = {currentTarget:  event.currentTarget}
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

  toggleModal = () => {
    this.props.toggleModal()
    this.close()
  } 

  logout = () => {
    this.props.logout()
    this.close()
  }

  render() {
    const { anchorEl } = this.state
    const { classes, disabled, user } = this.props

    return (
      <React.Fragment>

        {user.username}

        <Button size="small" color="inherit" aria-haspopup="true"
          className={classes.menuButton}
          aria-owns={anchorEl ? 'simple-menu' : null}
          disabled={disabled}
          onMouseEnter={this.timeOpen}
          // onMouseMove={this.timeOpen}
          onMouseLeave={this.timeClose}
        >
          <MoreIcon/>

        </Button>

        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.close}>
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            className={classes.menuItem}
            onClick={this.toggleModal}
          >
            <ListItemIcon><DraftsIcon className={classes.icon} /></ListItemIcon>
            <ListItemText inset primary="Edit Profile" />

          </MenuItem>
          <MenuItem onMouseLeave={this.timeClose} onMouseEnter={this.open}
            className={classes.menuItem}
            onClick={this.logout}
          >
            <ListItemIcon><InboxIcon className={classes.icon} /></ListItemIcon>
            <ListItemText inset primary="Logout" />

          </MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

export default UserMenu
