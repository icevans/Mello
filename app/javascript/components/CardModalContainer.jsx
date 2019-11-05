import React from "react";
import CardModal from "./CardModal";

class CardModalContainer extends React.Component {
  render() {
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <CardModal />
      </div>
    );
  }
}

export default CardModalContainer;
