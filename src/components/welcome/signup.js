import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {Signup as styles} from 'styles/welcome'

class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    repeatedPassword: '',
    submitted: false
  }

  checkUsername         = () => !this.state.submitted || !!this.state.username
  checkPassword         = () => !this.state.submitted || !!this.state.password
  checkRepeatedPassword = () => !this.state.submitted || this.state.password === this.state.repeatedPassword
  trySubmit             = () => this.setState({ submitted: true })
  resetSubmit           = () => this.setState({ submitted: false})

  handleInputChange = (event) => {
    event.persist()
    const { name, value } = event.target
    this.setState( { [name]: value } )
  }

  handleSubmit = (event) => {
    this.trySubmit()
    event.preventDefault()
    if (!this.checkRepeatedPassword()) return 
    this.props.onSubmit(this.state)
  }

  render() {
    const { classes } = this.props
    const { username, password, repeatedPassword } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField name="username" type="text" autoComplete="username" margin="normal" fullWidth autoFocus
          label="Username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!this.checkUsername()}
          placeholder="Type your username..."
          required
        />
        <TextField name="password" type="password" margin="normal" fullWidth autoComplete="new-password"
          label="Password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!this.checkPassword()}
          placeholder="Type your password..."
          required
        />
         <TextField name="repeatedPassword" type="password" fullWidth margin="normal" autoComplete="new-password"
          label="Repeat password"
          placeholder="Repeat your password..."
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!this.checkRepeatedPassword()}
          required
        />
        <Button type="submit" fullWidth variant="raised" color="primary"
          className={classes.signUpButton}
          onClick={this.trySubmit}
        >
          Signup
        </Button>
        <Button type="reset" fullWidth variant="raised" color="secondary"
          className={classes.signUpButton}
          onClick={this.resetSubmit}
        >
          Reset
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
