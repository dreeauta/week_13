import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';


let store = Redux.createStore(reducer);

class Counter extends React.Component {
  add() {
    store.dispatch({
      type: 'add'
    });
  }

  subtract() {
    store.dispatch({
      type: 'subtract'
    });
  }

  render() {
    return (
      <div>
      <button onClick = {() => this.subtract()}> - </button>
        {this.props.on}
      <button onClick = {() => this.add()}> + </button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Counter on = {store.getState()}/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
