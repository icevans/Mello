import React from 'react'
import { connect } from 'react-redux';

import List from './List';

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
        <div id="new-list" className="new-list"><span>Add a list...</span>
          <input type="text" placeholder="Add a list..." />
          <div>
            <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsContainer);
