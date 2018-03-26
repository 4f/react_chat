import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from 'registerServiceWorker';
import 'index.css';
import 'typeface-roboto';

import configureStore from 'store';
import RoutesContainer from 'containers/app';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

const App = ({ classes }) => (
  <Provider store={configureStore()}>
    <RoutesContainer />
  </Provider>
);

render();

if (module.hot) module.hot.accept(App, () => render());

registerServiceWorker();
