export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedLists = state.filter(list => (list.board_id !== action.board.id));
    const { lists, ...newBoardWithoutLists } = action.board;

    return excludedLists.concat(lists);
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.payload.newList);
  } else {
    return state;
  }
}
