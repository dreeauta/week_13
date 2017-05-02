import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(
    currentIndex: 0,
    images: []
});

it('go to next image (incrementing state)'), () => {
  expect(reducer(1, {type: 'next'})).toEqual(2);
});

it('go to previous image (decrementating state)'), () => {
  expect(reducer(1, {type: 'previous'})).toEqual(0);
}

// it('next wraps around if goes over', () => {
//   const state = {}
// })

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
