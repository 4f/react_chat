import React from 'react'
import { withStyles } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Modal from 'material-ui/Modal'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { ListItemIcon, ListItemText } from 'material-ui/List'

import InboxIcon from 'material-ui-icons/ExitToApp'
import DraftsIcon from 'material-ui-icons/Edit'

import {UserMenu as styles} from 'styles/chats/header'

class UserMenu extends React.Component {
  state = {
    isModalOpen: false,
    anchorEl: null,
    username: 'tmp',
    firstName: 'hi2',
    lastName: 'hi3'
  }


  handleClick = (event) => this.setState({ anchorEl: event.currentTarget })
  handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value })
  handleClose = () => this.setState({ anchorEl: null })

  toggleEditProfileModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
    this.handleClose();
  }

  handleSaveClick = () => {
    this.props.onEditProfileClick({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.toggleEditProfileModal();
  }

  handleLogoutClick = () => {
    this.props.onLogoutClick();
    this.handleClose();
  }

  render() {
    const { anchorEl, isModalOpen } = this.state
    const { classes, disabled } = this.props

    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
          onMouseEnter={this.handleClick}
          
        >
          <AccountCircle />
        </IconButton>
        <Menu id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onMouseLeave={this.handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={this.toggleEditProfileModal}>
            <ListItemIcon>
              <DraftsIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText inset primary="Edit Profile" />
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleLogoutClick}>
            <ListItemIcon>
              <InboxIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText inset primary="Logout" />
          </MenuItem>
        </Menu>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.toggleEditProfileModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              placeholder="Enter you username..."
              type="text"
              margin="normal"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter you first name..."
              type="text"
              margin="normal"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter you last name..."
              type="text"
              margin="normal"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <Button color="primary" onClick={this.handleSaveClick}>
              Save
            </Button>
            <Button onClick={this.toggleEditProfileModal}>
              Close
            </Button>
          </Paper>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(UserMenu)
