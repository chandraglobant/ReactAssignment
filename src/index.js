import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(
      todoApp,
      {},
      applyMiddleware(logger,thunk)
      );

      let rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
);
registerServiceWorker();