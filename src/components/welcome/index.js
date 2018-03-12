import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
import Login from './login'
import Signup from './signup'


class WelcomePage extends React.Component {
  state = { activeTab: 0 }

  // componentDidMount() { this.props.actions.auth.session() }

  handleTabChage = (event, value) => { this.setState({ activeTab: value }) }

  render() {
    const { classes, actions: {auth: { signup, login } } } = this.props
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
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChage}
                  fullWidth
                >
                  <Tab className={classes.tab} label="Login" />
                  <Tab className={classes.tab} label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <Login onSubmit={login} />}
                {activeTab === 1 && <Signup onSubmit={signup} />}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default WelcomePage

