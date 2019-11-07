import React from 'react'

class CommentForm extends React.Component {
  state = {
    text: "",
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value })
  }

  handleClick = (evt) => {
    evt.preventDefault;
    this.props.onClick(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="comment">
        <label>
          <textarea
            required=""
            rows="1"
            placeholder="Write a comment..."
            value={this.state.text}
            onChange={this.handleChange}
            required
          ></textarea>
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
            <a className="light-button attachment-icon sm-icon"></a>
          </div>
          <div>
            <input
              type="submit"
              className={(this.state.text === '' ? 'not-implemented' : '') + ' button'}
              value="Save"
              onClick={this.handleClick}
            />
          </div>
        </label>
      </div>
    )
  }

}

export default CommentForm;
