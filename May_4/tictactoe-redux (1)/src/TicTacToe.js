import React from 'react';

export function getWinner(board) {
  if (isWinner(board, 'X')) {
    return 'X';
  } else if (isWinner(board, 'O')) {
    return 'O';
  } else {
    return null;
  }
}

export function isFilled(board) {
  return board.every(square => !!square);
}

export function isWinner(board, player) {
  return (
    board[0] === player && board[3] === player && board[6] === player ||
    board[1] === player && board[4] === player && board[7] === player ||
    board[2] === player && board[5] === player && board[8] === player ||
    board[0] === player && board[1] === player && board[2] === player ||
    board[3] === player && board[4] === player && board[5] === player ||
    board[6] === player && board[7] === player && board[8] === player ||
    board[0] === player && board[4] === player && board[8] === player ||
    board[2] === player && board[4] === player && board[6] === player
  );
}

export default class TicTacToe extends React.Component {
  render() {
    let board = this.props.board;
    let winner = getWinner(board);
    let gameOver = false;
    let message;
    if (winner) {
      gameOver = true;
      message = `${winner} wins!`;
    } else {
      if (isFilled(board)) {
        gameOver = true;
        message = `Draw`;
      }
    }
    let playAgainButton;
    if (gameOver) {
      playAgainButton = <button onClick={this.props.playAgain}>Play again!</button>;
    }

    return (
      <div>
        <h1>I am TICTACTOE</h1>
        <table>
          <tbody>
            <tr>
              <th>O</th>
              <th>X</th>
              <th>Draws</th>
            </tr>
            <tr>
              <td>{this.props.oWins}</td>
              <td>{this.props.xWins}</td>
              <td>{this.props.draws}</td>
            </tr>
          </tbody>
        </table>
        <div className="message">{message}</div>
        <div className="board">
          {board.map((square, idx) =>
            <button key={idx}
              onClick={(event) => this.props.markSquare(idx)}
              >{square}</button>
          )}
        </div>
        {playAgainButton}
      </div>
    );
  }
}
