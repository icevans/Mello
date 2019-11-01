import React from 'react'

class NewList extends React.Component {
  state = {
    visibility: false,
    title: '',
  };

  formVisibilityClass = () => {
    if (this.state.visibility) {
      return 'selected';
    } else {
      return '';
    }
  }

  toggleFormVisibility = () => {
    this.setState((previousState) => {
      return { 
        visibility: !previousState.visibility,
        title: '',
      };
    });
  }

  handleUpdateTitle = (evt) => {
    this.setState({title: evt.target.value});
  }

  handleCreateList = () => {
    if (this.state.title === '') return;
    
    this.props.onCreateList(this.state.title);
    this.setState({title: ''})
    this.toggleFormVisibility();
  }

  render() {
    return (
      <div id="new-list" className={"new-list " + this.formVisibilityClass()}>
        <span onClick={this.toggleFormVisibility}>Add a list...</span>
        <input type="text" placeholder="Add a list..." onChange={ this.handleUpdateTitle } value={ this.state.title }/>
        <div>
          <input type="submit" className="button" value="Save" onClick={ this.handleCreateList }/>
          <i className="x-icon icon" onClick={this.toggleFormVisibility}></i>
        </div>
      </div>
    );
  }  
}

export default NewList;