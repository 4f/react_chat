import React from 'react'
import Modal from 'material-ui/Modal'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import Avatar from 'components/Avatar'


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


export default EditModal
