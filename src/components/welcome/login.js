import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {Login as styles} from 'styles/welcome'


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
    event.preventDefault()
    this.trySubmit()
    this.props.onSubmit(this.state)
  };

  render() {
    const { classes } = this.props
    const { username, password } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField fullWidth name="username" type="text" margin="normal" autoFocus
          label="Username"
          value={username}
          onChange={this.handleInputChange}
          error={!this.checkUsername()}
          placeholder="Type your username..."
          required
        />
        <TextField name="password" fullWidth type="password" margin="normal"
          label="Password"
          value={password}
          onChange={this.handleInputChange}
          error={!this.checkPassword()}
          placeholder="Type your username..."
          required
        />
        <Button type="submit" variant="raised" fullWidth color="primary"
          className={classes.signUpButton}
          onClick={this.trySubmit}
        >
          Login
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(LoginForm)
