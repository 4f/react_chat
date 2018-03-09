import React from 'react'
import { Provider } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import history from 'utils/history'
import configureStore from 'store'

import Routes from 'containers/routes'


import styles from 'styles/app'


const store = configureStore()

const App = ({ classes }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default withStyles(styles)(App)
