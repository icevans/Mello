export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedLists = state.filter(list => (list.board_id !== action.board.id));
    const { lists, ...newBoardWithoutLists } = action.board;

    return excludedLists.concat(lists);
  } else {
    return state;
  }
}
