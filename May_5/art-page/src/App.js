import React from 'react';
import logo from './logo.svg';
import './App.css';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

export default class App extends React.Component {
  render() {
    let currentImage = this.props.images[this.props.currentIndex];

    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Andreea Uta</h2>
        </div>
        <p className="App-intro">
          Welcome to my gallery.
        </p>

        <div>
        <button onClick={() => this.props.next(this.props.image)}>
        next
        </button>
        <button onClick={() => this.props.previous(this.props.image)}>
        </button>

        <div className='gallery'>
          {this.props.images.map((imageUrl, idx) =>
          <img key={idx} src={imageUrl} height="60" onClick={()=> this.select(idx)}/>
        )}

        </div>

        </div>

      </div>
    );
  }
}
