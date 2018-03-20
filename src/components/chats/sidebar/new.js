import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class NewChatButton extends React.Component {
  state = { open: false, title: '' }

  toggleModal = () => this.setState({ open: !this.state.open })
  handleTitleChange = event => this.setState({ title: event.target.value })
  reset = () => this.setState({ title: '', open: false })
  isTitle = () => this.state.title !== ''

  onCreate = (event) => {
    event.preventDefault()
    if (!this.isTitle()) return
    this.props.create({ title: this.state.title })
    this.reset()
  }

  render() {
    const { classes, disabled } = this.props
    const { open, title } = this.state

    return (
      <React.Fragment>

        <Button variant="fab" color="primary"
          className={classes.newChatButton}
          onClick={this.toggleModal}
          disabled={disabled}
        >
          <AddIcon />
        </Button>

        <Modal
          open={open}
          className={classes.modalWrapper}
          onClose={this.toggleModal}
        >
          <Paper className={classes.modal}>

            <Typography variant="title" id="modal-title"> Create new chat </Typography>
            <TextField fullWidth type="text" margin="normal" autoComplete="new-chat" autoFocus
              value={title.value}
              onChange={this.handleTitleChange}
              error={!this.isTitle()}
              label="New chat"
              placeholder="Type the title..."
              required />
            <Button color="primary" onClick={this.onCreate} > Create </Button>
            <Button color="primary" onClick={this.toggleModal} > Close </Button>
            
          </Paper>
        </Modal>

      </React.Fragment>
    );
  }
}

export default NewChatButton
