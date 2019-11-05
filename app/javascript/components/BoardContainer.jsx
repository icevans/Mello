import React from 'react'
import Board from './Board';
import { connect } from 'react-redux';

import { fetchBoard } from '../actions/BoardActions.js';
import { fetchCard } from '../actions/CardActions.js';


function mapStateToProps(state, ownProps) {
  let currentLocation = ownProps.match.params[0];

  if (currentLocation === 'boards') {
    return {
      board: state.boards.find(board => {
        return board.id === +ownProps.match.params.id
      }),
      currentLocation: currentLocation,
      modalVisible: false,
    }
  } else {
    return {
      board: (() => {
        let card = state.cards.find(card => {
          return card.id === +ownProps.match.params.id;
        });

        return state.boards.find(board => {
          return board.id === card.board_id;
        });
      })(),

      card: state.cards.find(card => {
        return card.id === +ownProps.match.params.id;
      }),

      currentLocation: currentLocation,
      modalVisible: true,
    }
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBoardLoaded: (id=ownProps.match.params.id) => {
      dispatch(
        fetchBoard(id)
      );
    },

    onCardLoaded: (callback) => {
      dispatch(
        fetchCard(ownProps.match.params.id, callback)
      )
    }
  };
}

class BoardContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.currentLocation);
    if (this.props.currentLocation === 'boards') {
      this.props.onBoardLoaded();
    } else {
      this.props.onCardLoaded(this.props.onBoardLoaded);
    }
    
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} card={this.props.card} modalVisible={this.props.modalVisible}/>
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
