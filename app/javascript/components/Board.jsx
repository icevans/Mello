import React from 'react';

const Board = ({ board }) => {
    return (
      <div>
        <header>
          <ul>
            <li id="title">{board.title}</li>
            <li className="star-icon icon"></li>
            <li className="private private-icon icon">Private</li>
          </ul>
          <div className="menu">
            <i className="more-icon sm-icon"></i>
            Show Menu
          </div>
          <div className="subscribed">
            <i className="sub-icon sm-icon"></i>
            Subscribed
          </div>
        </header>

        <main>
          {/* <ListContainer lists={this.props.board.lists} /> */}
        </main>

        <div id="modal-container"></div>
        <div id="dropdown-container"></div>
      </div>
    );
}

export default Board;
