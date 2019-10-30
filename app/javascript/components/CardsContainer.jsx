import React from 'react'
import { connect } from 'react-redux';

import Card from './Card';

function mapStateToProps(state, ownProps) {
  return {
    listId: ownProps.listId,
    cards: state.cards.filter(card => card.list_id === ownProps.listId),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
  };
}

class CardsContainer extends React.Component {
  render() {
    return (
      <div id="cards-container" data-id={ "list-" + this.props.listId + "-cards" }>
        {this.props.cards.map(card => <Card key={card.id} card={card} />)}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
