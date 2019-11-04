import React from 'react';

class AddCard extends React.Component {
  state = {
    title: '',
  };

  dropdownClass = () => {
    return this.props.addCardVisible ? "add-dropdown add-bottom active-card" : "add-dropdown add-bottom";
  };

  handleTitleChange = (evt) => {
    const title = evt.target.value;
    this.setState({ title });
  };

  handleSubmit = () => {
    return () => {
      this.props.onCreateCard(this.state.title, () => {
        this.props.onCloseCard();
        this.setState({ title: '' });
      });
    };
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.dropdownClass()}>
          <div className="card">
            <div className="card-info"></div>
            <textarea name="add-card" value={this.state.title} onChange={this.handleTitleChange}></textarea>
            <div className="members"></div>
          </div>
          <a className="button" onClick={this.handleSubmit()}>Add</a>
          <i className="x-icon icon" onClick={this.props.onCloseCard}></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom" onClick={this.props.onAddCardClick}>Add a card...</div>
      </React.Fragment>
    );
  };
};

export default AddCard;
