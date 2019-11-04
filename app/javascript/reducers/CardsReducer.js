export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedCards = state.filter(card => (card.board_id !== action.board.id));
    const { lists, ...newBoardWithoutLists } = action.board;
    const cardsForBoard = lists.reduce((cards, list) => cards.concat(list.cards), []);

    return excludedCards.concat(cardsForBoard);
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.payload.newCard);
  } else {
    return state;
  }
}
