import React from 'react';
import { connect } from 'react-redux';
import ListTitle from './ListTitle';
import { updateTitle } from '../actions/ListActions';

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUpdateTitle: (title, callback) => {
      dispatch(updateTitle({ title }, ownProps.list.id, callback));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTitle);
