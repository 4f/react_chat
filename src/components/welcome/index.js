import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
import Form from './form'


class WelcomePage extends React.Component {
  state = {
    activeTab: "login",
    submitted:  false,
    user:     { username:  '', password:  '', password2: '' }
  }
  // componentWillMount() { console.log("WILL_MOUNT") }
  // componentDidMount() { console.log("DID_MOUNT") }
  // componentWillUnmount() { debugger; console.log("WILL_UNMOUNT") }
  // componentDidUpdate() { console.log("DID_UPDATE") }
  // componentWillUpdate(p, s) { console.log("WILL_UPDATE", p, s) }

  constructor(){
    super()
    this.handles = {
      check:      this.checkError.bind(this),
      change:     this.onFieldChange.bind(this),
      submit:     this.onSubmit.bind(this),
      setInput:   this.registerInput.bind(this),
      trySubmit:  this.trySubmit.bind(this),
      reset:      this.resetSubmit.bind(this)
    }
  }

  onTabChange        = (event, value) => { this.setState({ activeTab: value, submitted: false }) }
  registerInput      = (el) => this.inputForValidation = el
  trySubmit          = () => this.setState({ submitted: true })
  checkError         = (name) => this.state.submitted && (
    name === 'password2' ? this.state.user.password !== this.state.user.password2 :  !this.state.user[name] )
  setRepitValidation = () => this.inputForValidation && this.inputForValidation.setCustomValidity     (
    this.state.user.password === this.state.user.password2 ? "" : "repeated password not same" )
  resetSubmit        = () => this.setState({ 
    submitted: false,
    user: { username: "", password: "", password2: "" } })
  
  onFieldChange = (event) => {
    event.persist()
    const { name, value } = event.target
    this.setState({ user: { ...this.state.user, [name]: value } }, this.setRepitValidation)
  }

  onSubmit = (event) => {
    this.trySubmit()
    event.preventDefault()
    this.props.actions.auth[this.state.activeTab](this.state.user)
  }

  render() {
    const { classes } = this.props
    const { activeTab } = this.state

    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" spacing={0}>
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs fullWidth value={activeTab} onChange={this.onTabChange} >
                  <Tab label="Login"   className={classes.tab} value="login" />
                  <Tab label="Sign Up" className={classes.tab} value="signup" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                <Form classes={classes}
                  user={this.state.user}
                  form={activeTab}
                  handles={this.handles} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default WelcomePage

