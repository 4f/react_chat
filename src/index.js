import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import registerServiceWorker from 'registerServiceWorker'
import 'index.css'
import 'typeface-roboto'

import configureStore from 'store'
import RoutesContainer from 'containers/routes'
import styles from 'styles/app'

const store = configureStore()
const render = () => ReactDOM.render( <App />, document.getElementById('root') )

const App = withStyles(styles)( ({ classes }) => (
  <Provider store={store}>
    <div className={classes.root}>
      <RoutesContainer />
    </div>
  </Provider>
) )

render()

if (module.hot) {
  module.hot.accept('./components/app', () => render() )
}

registerServiceWorker()
