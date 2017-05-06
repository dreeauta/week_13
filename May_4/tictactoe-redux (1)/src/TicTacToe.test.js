import { getWinner } from './TicTacToe';
import df from 'deep-freeze';

it('get the winner that has the row', () => {
  let board = df(['O', 'O', 'O', null, null, null, null, null, null])
  expect(getWinner(board)).toEqual('O');
});
