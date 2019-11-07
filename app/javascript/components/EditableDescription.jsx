import React from 'react';

class EditableDescription extends React.Component {
  state = {
    description: this.props.card.description,
    formVisible: false,
  };

  toggleFormVisibility = () => {
    this.setState((prevState) => {
      return { formVisible: !prevState.formVisible };
    });
  };

  handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  };

  handleDescriptionSubmit = () => {
    this.props.onDescriptionSubmit(this.state.description);
    this.toggleFormVisibility();
  };

  handleDescriptionCancel = () => {
    this.setState({ description: this.props.card.description });
    this.toggleFormVisibility();
  };

  render() {
    return (
      <form className="description">
        <p>Description</p>

        { this.state.formVisible ? (
          <React.Fragment>
            <textarea
              className="textarea-toggle"
              rows="1"
              autoFocus
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            >
            </textarea>
            <div>
              <div className="button" value="Save" onClick={this.handleDescriptionSubmit}>Save</div>
              <i className="x-icon icon" onClick={this.handleDescriptionCancel}></i>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span id="description-edit" className="link" onClick={this.toggleFormVisibility}>
              Edit
            </span>
            <p className="textarea-overlay">
              { this.props.card.description }
            </p>
          </React.Fragment>
        )}
      </form>
    )
  }
}

export default EditableDescription;
