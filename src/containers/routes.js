import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import history from 'utils/history'
import auth from 'actions/auth'
import Welcome from 'containers/welcome'
import Chats from 'containers/chats'
import Notice from 'components/notice'

const { session } = auth

class RoutesContainer extends React.Component {
  componentWillMount() { this.props.session() }
  render() { 
    const { notify: {error, success}, classes } = this.props
    return (
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route exact path="/(welcome)?" component={Welcome} />
            <Route path="/chat/:_id?" component={Chats} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Notice notice={error} classes={classes.errors} horizontal={"left"}/>
        <Notice notice={success} classes={classes.success} horizontal={"right"} />
      </React.Fragment>
      )
  }
}


export default connect(
  state     => ({ isAuth: state.auth.isAuth,
                  notify: state.services.notify
               }),
  dispatch  => bindActionCreators( {session} , dispatch)
 )( RoutesContainer )

