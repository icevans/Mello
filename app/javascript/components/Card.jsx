import React from 'react';
import moment from 'moment';

const Card = (props) => {
  const dueDateDifference = (due_date) => {
    const dueDate = moment(due_date);
    const currentDate = moment(new Date());
    const difference = dueDate.diff(currentDate, 'days');
    return difference;
  }

  const dueDateClass = () => {
    const difference = dueDateDifference(props.card.due_date);

    if (difference === 1 || difference === 0) {
      return 'due-soon';
    } else if (difference === -1) {
      return 'overdue-recent';
    } else if (difference < -1) {
      return 'overdue';
    } else {
      return '';
    }
  }  

  return (
    <div className="card-background">
      <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {props.card.labels.map((label, index) => (
            <div key={index} className={ 'card-label ' + label + ' colorblindable'}></div>
          ))}
          <p>{props.card.title}</p>
        </div>
        <div className="card-icons">
          { props.card.due_date ? (
            <i className={"clock-icon sm-icon " + dueDateClass()}> {moment(props.card.due_date).format('MMM D')}
          </i>
          ) : ''}
    
          { props.card.description ? (
            <i className="description-icon sm-icon"></i>
          ) : ''}

          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Card;

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }