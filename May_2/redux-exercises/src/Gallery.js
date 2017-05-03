import React from 'react';



export default class Gallery extends React.Component {

  select(idx) {
    this.props.selectImage(idx);
  }

  render() {



    const images = [
      'images/comfy.jpg',
      'images/farted.jpg',
      'images/hate.jpg',
      'images/lolcat_airplane.jpg',
      'images/mocked.jpg',
      'images/monorail.jpg',
    ];


    // let state =store.getState();
    let currentImage = images[this.props.currentIndex];
    // let next = () => store.dispatch({type: 'next'});
    // let previous = () => store.dispatch({type: 'previous'});

    return (
      <div>
        <button onClick={this.props.previous}>
          Previous
        </button>
        <button onClick={this.props.next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {images.map((imageUrl, idx) =>
            <img key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}
