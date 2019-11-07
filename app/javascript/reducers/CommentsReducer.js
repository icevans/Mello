export default function commentsReducer(state = [], action) {
  if (action.type === 'FETCH_CARD_SUCCESS') {
    const excludedComments = state.filter(comment => {
      return comment.card_id !== action.payload.card.id;
    });

    return [
      ...excludedComments,
      ...action.payload.card.comments
    ]
  } else if (action.type === 'CREATE_COMMENT_SUCCESS') {
    return state.concat(action.payload.newComment);
  } else {
    return state;
  }
}
