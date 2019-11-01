import React from 'react'

class NewList extends React.Component {
  state = {
    visibility: false,
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
      return { visibility: !previousState.visibility };
    });
  }

  render() {
    return (
      <div id="new-list" className={"new-list " + this.formVisibilityClass()}>
        <span onClick={this.toggleFormVisibility}>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className={ "x-icon icon"} onClick={this.toggleFormVisibility}></i>
        </div>
      </div>
    );
  }  
}

export default NewList;