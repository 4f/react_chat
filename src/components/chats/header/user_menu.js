import React from 'react'
import { withStyles } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem, MenuList } from 'material-ui/Menu'
// import AccountCircle from 'material-ui-icons/AccountCircle'
import Modal from 'material-ui/Modal'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { ListItemIcon, ListItemText } from 'material-ui/List'

import InboxIcon from 'material-ui-icons/ExitToApp'
import DraftsIcon from 'material-ui-icons/Edit'

import Avatar from 'components/Avatar'

import {UserMenu as styles} from 'styles/chats/header'

class UserMenu extends React.Component {
  state = { isModal: false, anchorEl: null }

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
    console.log("cLose", this.stOpen)
    clearTimeout(this.stOpen)
    this.stClose = setTimeout(this.close, 1000)
  }

  toggleModal = () => {
    this.setState({ isModal: !this.state.isModal })
    this.close()
  } 

  logout = () => {
    this.props.logout()
    this.close()
  }

  render() {
    const { anchorEl, isModal } = this.state
    const { classes, disabled, user } = this.props

    return (
      <React.Fragment>
        <IconButton color="inherit" aria-haspopup="true"
          aria-owns={anchorEl ? 'simple-menu' : null}
          disabled={disabled}
          onMouseEnter={this.timeOpen}
          // onMouseMove={this.timeOpen}
          onMouseLeave={this.timeClose}
        >
          <Typography variant="title" className={classes.appBarTitle}>{user.username} </Typography>
          <Avatar colorFrom={user._id} label={user.username} />
        </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.close}>
            <MenuItem className={classes.menuItem}
              onClick={this.toggleModal}
              onMouseLeave={this.timeClose}
              onMouseEnter={this.open}
            >
              <ListItemIcon><DraftsIcon className={classes.icon} /></ListItemIcon>
              <ListItemText inset primary="Edit Profile" />
            </MenuItem>
            <MenuItem className={classes.menuItem}
              onClick={this.logout}
              onMouseLeave={this.timeClose}
              onMouseEnter={this.open}
            >
              <ListItemIcon><InboxIcon className={classes.icon} /></ListItemIcon>
              <ListItemText inset primary="Logout" />
            </MenuItem>
          </Menu>
        <EditModal user={user} on={isModal} toggle={this.toggleModal} classes={classes} user={user} />
      </React.Fragment>
    )
  }
}


class EditModal extends React.Component {
  state = { username: '', firstName: '', lastName: '' }
  
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  save = () => {
    this.props.edit( this.state )
    this.props.toggle()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.user.username,
      firstName: nextProps.user.firstName,
      lastName: nextProps.user.lastName
    })
  }

  render() { 
    return (
      <Modal open={this.props.on} className={this.props.classes.modalWrapper} onClose={this.props.toggle}>
        <Paper className={this.props.classes.modal}>
          <Typography variant="title" id="modal-title"> Edit profile </Typography>
          <TextField name="username" type="text" margin="normal" fullWidth
            label="Username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="Enter you username..."
            required
          />
          <TextField name="firstName" type="text" margin="normal" fullWidth
            label="First name"
            value={this.state.firstName}
            placeholder="Enter you first name..."
            onChange={this.onChange}
          />
          <TextField name="lastName" type="text" margin="normal" fullWidth
            label="Last name"
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Enter you last name..."
          />
          <Button color="primary" onClick={this.save}> Save </Button>
          <Button onClick={this.props.toggle}> Close </Button>
        </Paper>
      </Modal>
  ) }
}


export default withStyles(styles)(UserMenu)
