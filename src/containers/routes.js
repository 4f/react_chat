import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import history from 'utils/history'
import {session} from 'actions/auth'
import Welcome from 'containers/welcome'
import Chats from 'containers/chats'


class RoutesContainer extends React.Component {
  componentWillMount() { this.props.session() }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/(welcome)?" component={Welcome} />
          <Route path="/chat/:_id?" component={Chats} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}


export default connect(
  state     => ({ isAuth: state.auth.isAuth }) , 
  dispatch  => bindActionCreators({ session }, dispatch)
 )( RoutesContainer )

