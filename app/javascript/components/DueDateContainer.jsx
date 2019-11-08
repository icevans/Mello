import React from 'react';
import { connect } from 'react-redux';
import DueDate from './DueDate'
import { updateCard } from '../actions/CardActions'

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (dueDate, callback) => {
      dispatch(updateCard(dueDate, ownProps.cardId, callback));
    },

    onRemove: () => {},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DueDate);