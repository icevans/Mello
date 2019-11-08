import React from "react";
import Pikaday from "pikaday";
import moment from "moment";

class DueDateForm extends React.Component {
  defaultMoment = () => {
    if (this.props.dueDate) {
      return moment(this.props.dueDate);
    } else {
      const time = moment().add(1, "day");

      time.set({
        hour: 12,
        minute: 0,
        second: 0
      });

      return time;
    }
  };

  defaultDate = () => {
    this.defaultMoment().toDate();
  };

  componentDidMount() {
    this.picker = new Pikaday({
      field: this.refs.dateInput,
      bound: false,
      container: this.refs.calendar,
      firstDay: 1,
      yearRange: 10,
      defaultDate: this.defaultDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
      },
      keyboardInput: false,
      toString(date, format) {
        return moment(date).format(format);
      }
    });
    this.picker.show();
  }

  handleSubmit = evt => {
    evt.preventDefault();
    let date = evt.target.querySelector(".datepicker-select-date input").value;
    let time = evt.target.querySelector(".datepicker-select-time input").value;
    let dateTime = `${date} ${time}`;
    this.props.onSubmit({
      due_date: moment(dateTime, "M/D/YYYY h:mm A").toISOString()
    });
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <header>
          <span>Change due date</span>
          <a
            href="#"
            className="icon-sm icon-close"
            onClick={this.props.onClose}
          ></a>
        </header>
        <div className="content">
          <form onSubmit={this.handleSubmit} onReset={this.props.onRemove}>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input
                    type="text"
                    placeholder="Enter date"
                    autoFocus={true}
                    ref="dateInput"
                    defaultValue={this.defaultMoment().format("M/D/YYYY")}
                  />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input
                    type="text"
                    placeholder="Enter time"
                    defaultValue={this.defaultMoment().format("h:mm A")}
                  />
                </label>
              </div>
              <div id="calendar-widget" ref="calendar"></div>
            </div>
            <button className="button" type="submit">
              Save
            </button>
            <button className="button red-button" type="reset">
              Remove
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DueDateForm;
