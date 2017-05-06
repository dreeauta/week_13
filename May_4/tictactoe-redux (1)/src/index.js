import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import reducer from './TicTacToe.reducer';
import TicTacToeContainer from './TicTacToe.container';

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <TicTacToeContainer />
  </Provider>,
  document.getElementById('root')
);
