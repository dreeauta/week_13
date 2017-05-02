import reducer from './HeadsTails.js';

it('starts at zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});
