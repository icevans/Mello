import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST };
};

export function createCommentSuccess(newComment) {
  return {
    type: types.CREATE_COMMENT_SUCCESS,
    payload: {newComment},
  }
};

export function createComment(text, cardId, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());

    apiClient.createComment(text, cardId, newComment => {
      dispatch(createCommentSuccess(newComment));
      console.log(newComment);

      if (callback) { callback(); }
    });
  };
};
