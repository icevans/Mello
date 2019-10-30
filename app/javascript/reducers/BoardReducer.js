export default function boardReducer(state = {}, action) {
  if (action.type === 'BOARD_FETCHED') {
    return action.board;
  } else {
    return state;
  }
}
