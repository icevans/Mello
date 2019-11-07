import React from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';
import CommentFormContainer from './CommentFormContainer';
import EditableDescription from './EditableDescription';

// card, list, onCardLoaded
class CardModal extends React.Component {
  componentDidMount() {
    this.props.onCardLoaded();
  }

  state = {
    title: this.props.card.title
  };

  dueDateDifference = (due_date) => {
    const dueDate = moment(due_date);
    const currentDate = moment(new Date());
    const difference = dueDate.diff(currentDate, 'days');

    return difference;
  }

  dueDateClass = () => {
    const difference = this.dueDateDifference(this.props.card.due_date);

    if (difference === 1 || difference === 0) {
      return 'due-soon';
    } else if (difference === -1) {
      return 'overdue-recent';
    } else if (difference < -1) {
      return 'overdue';
    } else {
      return '';
    }
  };

  handleTitleChange = (evt) => {
    this.setState({ title: evt.target.value });
  };

  handleTitleBlur = () => {
    this.props.onCardChange({ title: this.state.title });
  };

  handleDescriptionSubmit = (description) => {
    this.props.onCardChange({ description });
  };

  handleArchiveCard = () => {
    this.props.onCardChange({ archived: true });
  };

  handleUnarchiveCard = () => {
    this.props.onCardChange({ archived: false });
  };

  render() {
    return (
      <div id="modal-container">
        <Link to={`/boards/${this.props.list.board_id}`}>
          <div className="screen"></div>
        </Link>

        <div id="modal">
          <Link to={`/boards/${this.props.list.board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>

          {this.props.card.archived ? (
            <div className="archived-banner"><i className="file-icon icon"></i>This card is archived.</div>
          ) : (
            ''
          )}

          <header>
            <i className="card-icon icon"></i>
            <textarea
              className="list-title"
              style={{ height: "45px" }}
              value={this.state.title}
              onChange={this.handleTitleChange}
              onBlur={this.handleTitleBlur}
            >
            </textarea>
            <p>
              in list <a className="link">{ this.props.list.title }</a>
              <i className="sub-icon sm-icon"></i>
            </p>
          </header>
          <section className="modal-main">
            <ul className="modal-outer-list">
              <li className="details-section">
                <ul className="modal-details-list">
                  <li className="labels-section">
                    <h3>Labels</h3>

                    {
                      this.props.card.labels.map((label, index) => {
                        return (
                          <div key={index} className="member-container">
                            <div className={label + ' label colorblindable'}></div>
                          </div>
                        );
                      })
                    }

                    <div className="member-container">
                      <i className="plus-icon sm-icon"></i>
                    </div>
                  </li>
                  <li className="due-date-section">
                    <h3>Due Date</h3>
                    <div id="dueDateDisplay" className={this.dueDateClass()}>
                      <input
                        id="dueDateCheckbox"
                        type="checkbox"
                        className="checkbox"
                        checked=""
                      />
                      {moment(this.props.card.due_date).format('MMM D [at] LT')}
                      <span>{ this.dueDateDifference(this.props.card.due_date) < 0 ? '(past due)' : ''}</span>
                    </div>
                  </li>
                </ul>
                <EditableDescription card={this.props.card} onDescriptionSubmit={this.handleDescriptionSubmit} />
              </li>
              <li className="comment-section">
                <h2 className="comment-icon icon">Add Comment</h2>
                <div>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <CommentFormContainer card={this.props.card} />
                </div>
              </li>
              <li className="activity-section">
                <h2 className="activity-icon icon">Activity</h2>
                <ul className="horiz-list">
                  <li className="not-implemented">Show Details</li>
                </ul>
                <ul className="modal-activity-list">
                  <li className="activity-comment">
                    <div className="member-container">
                      <div className="card-member">TP</div>
                    </div>
                    <h3>Taylor Peat</h3>
                    <div className="comment static-comment">
                      <span>The activities are not functional.</span>
                    </div>
                    <small>
                      22 minutes ago - <span className="link">Edit</span> -{" "}
                      <span className="link">Delete</span>
                    </small>
                    <div className="comment">
                      <label>
                        <textarea required="" rows="1" value="The activities have not been implemented yet."></textarea>
                        <div>
                          <a className="light-button card-icon sm-icon"></a>
                          <a className="light-button smiley-icon sm-icon"></a>
                          <a className="light-button email-icon sm-icon"></a>
                        </div>
                        <div>
                          <p>You haven't typed anything!</p>
                          <input
                            type="submit"
                            className="button not-implemented"
                            value="Save"
                          />
                          <i className="x-icon icon"></i>
                        </div>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="member-container">
                      <div className="card-member small-size">VR</div>
                    </div>
                    <p>
                      <span className="member-name">Victor Reyes</span> changed
                      the background of this board{" "}
                      <small>yesterday at 4:53 PM</small>
                    </p>
                  </li>
                  <li className="activity-comment">
                    <div className="member-container">
                      <div className="card-member">VR</div>
                    </div>
                    <h3>Victor Reyes</h3>
                    <div className="comment static-comment">
                      <span>Example of a comment.</span>
                    </div>
                    <small>
                      22 minutes ago - <span className="link">Edit</span> -{" "}
                      <span className="link">Delete</span>
                    </small>
                    <div className="comment">
                      <label>
                        <textarea required="" rows="1">
                          Example of a comment.
                        </textarea>
                        <div>
                          <a className="light-button card-icon sm-icon"></a>
                          <a className="light-button smiley-icon sm-icon"></a>
                          <a className="light-button email-icon sm-icon"></a>
                        </div>
                        <div>
                          <p>You haven't typed anything!</p>
                          <input
                            type="submit"
                            className="button not-implemented"
                            value="Save"
                          />
                          <i className="x-icon icon"></i>
                        </div>
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button">
                <i className="person-icon sm-icon"></i>Members
              </li>
              <li className="label-button">
                <i className="label-icon sm-icon"></i>Labels
              </li>
              <li className="checklist-button">
                <i className="checklist-icon sm-icon"></i>Checklist
              </li>
              <li className="date-button not-implemented">
                <i className="clock-icon sm-icon"></i>Due Date
              </li>
              <li className="attachment-button not-implemented">
                <i className="attachment-icon sm-icon"></i>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button">
                <i className="forward-icon sm-icon"></i>Move
              </li>
              <li className="copy-button">
                <i className="card-icon sm-icon"></i>Copy
              </li>
              <li className="subscribe-button">
                <i className="sub-icon sm-icon"></i>Subscribe
                <i className="check-icon sm-icon"></i>
              </li>
              <hr />
              {this.props.card.archived ? (
                <React.Fragment>
                  <li className="unarchive-button" onClick={this.handleUnarchiveCard}><i className="send-icon sm-icon"></i>Send to board</li>
                  <li className="red-button"><i className="minus-icon sm-icon"></i>Delete</li>
                </React.Fragment>
              ) : (
                <li className="archive-button" onClick={this.handleArchiveCard}>
                  <i className="file-icon sm-icon"></i>Archive
                </li>
              )}
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
};

export default CardModal;
