import React from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { createComment } from '../actions/CommentActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (text, callback) => {
      dispatch(createComment(text, ownProps.card.id, callback));
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
