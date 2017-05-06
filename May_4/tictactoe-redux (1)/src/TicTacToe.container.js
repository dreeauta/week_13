import * as ReactRedux from 'react-redux';
import TicTacToe from './TicTacToe';

function mapStateToProps(state) {
  return {
    board: state.board,
    oWins: state.oWins,
    xWins: state.xWins,
    draws: state.draws
  };
}

function mapDispatchToProps(dispatch) {
  return {
    markSquare: function(idx) {
      dispatch({
        type: 'mark_square',
        index: idx
      });
    },
    playAgain: function() {
      dispatch({
        type: 'play_again'
      });
    }
  };
}

const TicTacToeContainer = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToe);

export default TicTacToeContainer;
