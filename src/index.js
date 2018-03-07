import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/app'
import registerServiceWorker from 'registerServiceWorker'
import 'index.css'
import 'typeface-roboto'

const rootEl = document.getElementById('root')

ReactDOM.render( <App />, rootEl )


if (module.hot) {
  module.hot.accept('./components/app', () => { 
    ReactDOM.render(<App />, rootEl) 
  })
}

registerServiceWorker();
