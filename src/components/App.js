import React from 'react'
import { Provider } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from 'utils/history'
import configureStore from 'store'

import PrivateRoute from 'containers/PrivateRoute'
import WelcomePage from 'containers/WelcomePage'
import Chats from 'containers/chats'

import styles from 'styles/app'


const store = configureStore()

const App = ({ classes }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <PrivateRoute path="/chat" component={Chats} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default withStyles(styles)(App)
