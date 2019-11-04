import React from 'react';

class ListTitle extends React.Component {
  state = {
    title: this.props.list.title,
    titleInputVisibility: false,
  };

  toggleInput = () => {
    this.setState(prevState => (
      { titleInputVisibility: !prevState.titleInputVisibility}
    ));
  }

  handleChange = (evt) => {
    const newTitle = evt.target.value;
    this.setState({ title: newTitle });
  }

  handleUpdateTitle = () => {
    this.props.onUpdateTitle(this.state.title, this.toggleInput);
  }

  render() {
      if (this.state.titleInputVisibility) {
        return (
          <input type="text" className="list-title"
            value={this.state.title} autoFocus="true"
            onBlur={this.handleUpdateTitle}
            onChange={this.handleChange}
          />
        );
      } else {
        return (
          <p onClick={this.toggleInput} className="list-title">
            {this.state.title}
          </p>
        );
      }
  }
}

export default ListTitle;
