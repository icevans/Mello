import React from 'react'
import Board from './Board';
import { connect } from 'react-redux';

import { fetchBoard } from '../actions/BoardActions.js';

function mapStateToProps(state, ownProps) {
  return {
    board: state.boards.find(board => {
      return board.id === +ownProps.match.params.id
    }),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBoardLoaded: () => {
      dispatch(
        fetchBoard(ownProps.match.params.id)
      );
    }
  };
}

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.onBoardLoaded();
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
