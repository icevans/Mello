import React from 'react';

const Card = (props) => {
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
          <i className="clock-icon sm-icon overdue-recent completed">{props.card.due_date}</i>
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Card;
