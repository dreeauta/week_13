import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import './index.css';


let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <TictactoeContainer/>

    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
