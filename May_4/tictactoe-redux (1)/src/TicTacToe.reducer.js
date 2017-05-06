import { getWinner, isFilled } from './TicTacToe';

const INITIAL_STATE = {
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: 'O',
  xWins: 0,
  oWins: 0,
  draws: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'play_again') {
    return Object.assign({}, state, {
      board: [null, null, null, null, null, null, null, null, null],
      currentPlayer: 'O'
    });
  } else if (action.type === 'mark_square') {
    // let newBoard = state.board.map((value, idx) => {
    //   if (value) {
    //     return value;
    //   }
    //   return idx === action.index ? state.currentPlayer : value;
    // });
    let newBoard = state.board.slice();
    if (!newBoard[action.index]) {
      newBoard[action.index] = state.currentPlayer;
    }
    let newCurrentPlayer = state.currentPlayer === 'X' ? 'O': 'X';
    let xWins = state.xWins;
    let oWins = state.oWins;
    let draws = state.draws;
    let winner = getWinner(newBoard);
    if (winner === 'O') {
      oWins++;
    }
    if (winner === 'X') {
      xWins++;
    }
    if (!winner && isFilled(newBoard)) {
      draws++;
    }
    return Object.assign({}, state, {
      board: newBoard,
      currentPlayer: newCurrentPlayer,
      xWins: xWins,
      oWins: oWins,
      draws: draws
    });
  }
  return state;
}
