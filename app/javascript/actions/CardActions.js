import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(newCard) {
  return {
    type: types.CREATE_CARD_SUCCESS,
    payload: { newCard }
  };
};

export function createCard(card, listId, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());

    apiClient.createCard(card, listId, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) { callback(); }
    });
  };
};
