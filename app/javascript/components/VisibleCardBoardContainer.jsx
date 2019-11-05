import React from "react";
import * as ApiClient from "../lib/ApiClient"

class VisibleCardBoardContainer extends React.Component {
  onComponentDidMount() {
    ApiClient.getCard(+ownProps.match.params.id, (card) => {
      this.setState({ card: card });
    })
  }

  render() {
    return (
      <Board board={this.board} />
    );
  }
}

export default VisibleCardBoardContainer;