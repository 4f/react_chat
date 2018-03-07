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
    const { username, password } = this.state
    this.props.onSubmit(username, password)
  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
          name="username"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!this.checkUsername()}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password..."
          type="password"
          margin="normal"
          name="password"
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!this.checkPassword()}
        />
         <TextField
          required
          fullWidth
          label="Repeat password"
          placeholder="Repeat your password..."
          type="password"
          margin="normal"
          name="repeatedPassword"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!this.checkRepeatedPassword()}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
          onClick={this.trySubmit}
        >
          Signup
        </Button>
        <Button
          fullWidth
          variant="raised"
          type="reset"
          color="secondary"
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
