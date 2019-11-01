import React from 'react'
import { connect } from 'react-redux';

import List from './List';
import NewList from './NewList';

function mapStateToProps(state, ownProps) {
  return {
    lists: state.lists.filter(list => list.board_id === ownProps.boardId),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
  };
}

class ListsContainer extends React.Component {
  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {this.props.lists.map(list => <List key={list.id} list={list} />)}
        </div>
        <NewList />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsContainer);
