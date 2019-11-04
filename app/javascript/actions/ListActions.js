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

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
};

export function updateListSuccess(updatedList) {
  return {
    type: types.UPDATE_LIST_SUCCESS,
    payload: { updatedList },
  };
};

export function updateTitle(listProps, listId, callback) {
  return function (dispatch) {
    dispatch(updateListRequest());

    apiClient.updateList(listProps, listId, updatedList => {
      dispatch(updateListSuccess(updatedList));

      if (callback) { callback(updatedList); }
    });
  };
};
