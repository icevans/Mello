import React from "react";
import CardModal from "./CardModal";
import { connect } from 'react-redux';
import { updateCard } from '../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(card => {
    return card.id === ownProps.cardId;
  });

  const list = state.lists.find(list => {
    return list.id === card.list_id;
  })

  return {
    card: card,
    list: list,
    onCardLoaded: ownProps.onCardLoaded,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCardChange: (cardProps, callback) => {
      dispatch(updateCard(cardProps, ownProps.cardId, callback));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardModal);
