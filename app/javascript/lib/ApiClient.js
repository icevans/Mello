import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(id, callback) {
    return axios.get(routes.BOARDS_SHOW_URL + id)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(list, boardId, callback) {
    return axios.post(routes.CREATE_LIST_URL, { list, board_id: boardId })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(listProps, listId, callback) {
    return axios.put(routes.UPDATE_LIST_URL + listId, listProps)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(cardProps, listId, callback) {
    return axios.post(routes.CREATE_CARD_URL, { list_id: listId, card: cardProps })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function(cardId, callback) {
    return axios.get(routes.SHOW_CARD_URL + cardId)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createComment: function(text, cardId, callback) {
    return axios.post(routes.CREATE_COMMENT_URL, {
      card_id: cardId,
      comment: {
        text: text,
      },
    })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
