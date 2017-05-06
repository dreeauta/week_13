import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import ReduxThunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
import {reducer as movieReducer} from './MovieWidget.reducer';
import AppContainer from './MovieWidget.container';
import { Provider } from 'react-redux';
import App from './app';

const reducer = Redux.combineReducers({
  search: movieReducer
});

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
