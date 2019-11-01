import React from 'react'
import { connect } from 'react-redux';

import { createList } from '../actions/ListActions.js';

import List from './List';
import NewList from './NewList';

function mapStateToProps(state, ownProps) {
  return {
    lists: state.lists.filter(list => list.board_id === ownProps.boardId),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCreateList: (title) => {
      dispatch(createList({ title }, ownProps.boardId));
    }
  };
}

class ListsContainer extends React.Component {
  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {this.props.lists.map(list => <List key={list.id} list={list} />)}
        </div>
        <NewList onCreateList={this.props.onCreateList} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsContainer);
