import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import styles from 'styles/LoginForm'


class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    submitted: false
  }

  checkUsername = () => !this.state.submitted || !!this.state.username
  checkPassword = () => !this.state.submitted || !!this.state.password
  trySubmit     = () =>  this.setState({ submitted: true })


  handleInputChange = (event) => {
    const { name, value } = event.target
    event.persist()
    this.setState( { [name]: value } )
  }

  handleSubmit = (event) => {
    const { username, password } = this.state
    event.preventDefault()
    this.trySubmit()
    this.props.onSubmit(username, password)
  };

  render() {
    const { classes } = this.props
    const { username, password } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          name="username"
          margin="normal"
          value={username}
          onChange={this.handleInputChange}
          error={!this.checkUsername()}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your username..."
          type="password"
          name="password"
          margin="normal"
          value={password}
          onChange={this.handleInputChange}
          error={!this.checkPassword()}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          onClick={this.trySubmit}
          className={classes.signUpButton}
        >
          Login
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(LoginForm)
