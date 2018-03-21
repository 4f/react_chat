import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'


import { CircularProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'

import history from 'utils/history'
import auth from 'actions/auth'
import Welcome from 'containers/welcome'
import Chats from 'containers/chats'
import Notice from 'components/notice'

import styles from 'styles/app'


const { session } = auth

class RoutesContainer extends React.Component {
  componentWillMount() { this.props.isAuth && this.props.session() }
  render() { 
    const { isAuth, notify: {error, success}, classes } = this.props
    return (
      <div className={classes.root}>
          { isAuth === 0 &&
        <Loader classes={classes} /> }
        <Router history={history}>
          <Switch>
            <Route exact path="/(welcome)?" component={Welcome} />
            <Route path="/chat/:_id?" component={Chats} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Notice notice={error}   classes={classes.errors}  horizontal={"left"}/>
        <Notice notice={success} classes={classes.success} horizontal={"right"} />
      </div>
      )
  }
}

const Loader = ({classes: {loader} }) => (
  <Paper className={ loader }>
    <CircularProgress size={150} style={{ margin: "auto" }} />
  </Paper>
)


export default connect(
  state     => ({ isAuth: state.auth.isAuth,
                  notify: state.services.notify
               }),
  dispatch  => bindActionCreators({
                  session } , dispatch)
)( withStyles(styles)(RoutesContainer) )

