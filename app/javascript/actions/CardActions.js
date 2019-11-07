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

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return {
    type: types.FETCH_CARD_SUCCESS,
    payload: { card }
  };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
};

export function updateCardSuccess(updatedCard) {
  return {
    type: types.UPDATE_CARD_SUCCESS,
    payload: { updatedCard }
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

export function fetchCard(id, callback) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(
      id,
      card => {
        dispatch(fetchCardSuccess(card))
        if (callback) { callback(card.board_id); }
      }
    );
  };
};

export function updateCard(cardProps, cardId, callback) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(cardProps, cardId, updatedCard => {
      dispatch(updateCardSuccess(updatedCard));
      if (callback) { callback(updatedCard); }
    });
  };
};
