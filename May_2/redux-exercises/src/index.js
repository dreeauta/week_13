import React from 'react';
import ReactDom from 'react-dom';
import * as Redux from 'redux';
import counterReducer from './Counter.reducer';
import Counter from './Counter';
import galleryReducer from './Gallery.reducer';
import Gallery from './Gallery';
import * as ReactRedux from 'react-redux';



const INITIAL_STATE = {
  galleryData: {
    currentIndex: 0, images: [] },
  counter: 0
};


function reducer(state = INITIAL_STATE, action) {
  return {
    galleryData: galleryReducer(state.galleryData, action),
    count: counterReducer(state.count, action)
  }
}

// const reducer = combineReducers({
//   galleryData: galleryReducer,
//   count: counterReducer
//
// });

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.dispatch({
//   type: 'receive_images',
//   images: [
//     'images/comfy.jpg',
//     'images/farted.jpg',
//     'images/hate.jpg',
//     'images/lolcat_airplane.jpg',
//     'images/mocked.jpg',
//     'images/monorail.jpg',
//   ]
// });

const GalleryContainer = ReactRedux.connect(
  state => ({ currentIndex: state.galleryData.currentIndex}),
  dispatch => ({
      next: () => dispatch({
        type: 'next'
      }),
      previous: () => dispatch({
        type: 'previous'
      })
  })
)(Gallery);

const CounterContainer = ReactRedux.connect(
    state => ({ count: state.count}),
    dispatch => ({
        add: () => dispatch({
          type: 'add'
        }),
        subtract: () => dispatch({
          type: 'subtract'
        })
    })
)(Counter);

ReactDom.render(
    <ReactRedux.Provider store={store}>
      <div>
        <CounterContainer/>
        <GalleryContainer/>
      </div>
    </ReactRedux.Provider>,
    document.getElementById('root')
);
