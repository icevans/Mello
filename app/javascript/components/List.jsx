import React from 'react'

import CardsContainer from './CardsContainer';
import ListTitleContainer from './ListTitleContainer';
import AddCardContainer from './AddCardContainer';

class List extends React.Component {
  state = {
    addCardVisible: false,
  };

  listWrapperClass = () => {
    return this.state.addCardVisible ? "list-wrapper add-dropdown-active" : "list-wrapper";
  };

  handleCloseCard = () => {
    this.setState({ addCardVisible: false });
  };

  handleAddCardClick = () => {
    this.setState({ addCardVisible: true });
  };

  render() {
    return (
      <div className={this.listWrapperClass()}>
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                    <ListTitleContainer list={this.props.list} />
                  </div>
                  <div className="add-dropdown add-top">
                    <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                    <div className="add-options"><span>...</span>
                    </div>
                  </div>
                  <CardsContainer listId={this.props.list.id} />
                  <AddCardContainer
                    listId={this.props.list.id}
                    onCloseCard={this.handleCloseCard}
                    onAddCardClick={this.handleAddCardClick}
                    addCardVisible={this.state.addCardVisible}
                  />
              </div>
          </div>
      </div>
    );
  }
};

export default List;
