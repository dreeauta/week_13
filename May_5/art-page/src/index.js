import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as Redux from 'redux';
import { Provider } from 'redux-thunk';
import reducer from './reducer';
import AppContainer from './AppContainer';
import ReduxThunk from 'redux-thunk';

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store = {store}>
  <AppContainer />
  </Provider>,
  document.getElementById('root')
);
