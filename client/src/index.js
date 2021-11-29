import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyles from "./commons/styles/GlobalStyles";
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();