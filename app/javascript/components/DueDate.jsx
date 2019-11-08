import React from "react";
import moment from "moment";
import DueDateForm from './DueDateForm.jsx'

class DueDate extends React.Component {
  state = {
    displayPopover: false
  };

  dueDateDifference = due_date => {
    const dueDate = moment(due_date);
    const currentDate = moment(new Date());
    const difference = dueDate.diff(currentDate, "days");

    return difference;
  };

  dueDateClass = () => {
    const difference = this.dueDateDifference(this.props.dueDate);

    if (difference === 1 || difference === 0) {
      return "due-soon";
    } else if (difference === -1) {
      return "overdue-recent";
    } else if (difference < -1) {
      return "overdue";
    } else {
      return "";
    }
  };

  handleClick = () => {
    this.setState({ displayPopover: !this.state.displayPopover });
  };

  onClose = () => {
    this.setState({ displayPopover: !this.state.displayPopover });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Due Date</h3>
        {this.state.displayPopover ? (
          <DueDateForm
            dueDate={this.props.dueDate}
            onClose={this.onClose}
            onSubmit={this.props.onSubmit}
            onRemove={this.props.onRemove}
            onClick={this.handleClick}
          />
        ) : (
          <div
            id="dueDateDisplay"
            className={this.dueDateClass()}
            onClick={this.handleClick}
          >
            <input
              id="dueDateCheckbox"
              type="checkbox"
              className="checkbox"
              checked=""
            />
            {moment(this.props.dueDate).format("MMM D [at] LT")}
            <span>
              {this.dueDateDifference(this.props.dueDate) < 0
                ? "(past due)"
                : ""}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DueDate;
