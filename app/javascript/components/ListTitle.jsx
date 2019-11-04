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

  render() {
      if (this.state.titleInputVisibility) {
        return (
          <input type="text" className="list-title"
            value={this.state.title} autoFocus="true"
            onBlur={this.toggleInput}/>
        );
      } else {
        return (
          <p onClick={this.toggleInput} className="list-title">
            {this.props.list.title}
          </p>
        );
      }
  }
}

export default ListTitle;
