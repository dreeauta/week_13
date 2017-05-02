import React from 'react';
import ReactDOM from 'react-dom';
// Add code to create a store
import * as Redux from 'redux';
import reducer from './HeadsTails.reducer';

let store = Redux.createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class HeadsTails extends React.Component {
  flip(){
    store.dispatch({
      type: 'flip',
      value: Math.random()
    });
  }

  render() {
    let value = this.props.on;
    let coinDisplay;
    if (value) {
      let imageUrl = value > 0.5 ?
        'images/quarter-front.png' :
        'images/quarter-back.png';
      coinDisplay = <img src={imageUrl}/>;
    }
    return (
      <div>
        {coinDisplay}
        <button onClick ={() => this.flip()}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display() {
ReactDOM.render(<HeadsTails on ={store.getState()}/>,      document.getElementById('root'));
};

display();
store.subscribe(display);
