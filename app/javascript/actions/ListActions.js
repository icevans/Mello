import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListSuccess(newList) {
  return { 
    type: types.CREATE_LIST_SUCCESS,
    payload: { newList },
  };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createList(list, boardId, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    
    apiClient.createList(list, boardId, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    });
  }
}
