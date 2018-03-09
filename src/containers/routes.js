import React from 'react'
import { Provider } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import history from 'utils/history'
import configureStore from 'store'

import auth from 'actions/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import PrivateRoute from 'containers/PrivateRoute'
import WelcomePage from 'components/welcome'
import Chats from 'containers/chats'

import styles from 'styles/app'


const store = configureStore()

class Routes extends React.Component {

  componentDidMount() { this.props.actions.auth.session() }

  render() {
    const { auth, isAuth, classes } = this.props
    return (
      <Router history={history}>
        <div className={classes.root}>

          <Switch>
            <Route exact path="/(welcome)?" component={WelcomePage} action={auth} isAuth={isAuth} />
            <PrivateRoute path="/chat/:id?" component={Chats} />
            <Redirect to="/" />
          </Switch>

        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withStyles(styles)(Routes) )
