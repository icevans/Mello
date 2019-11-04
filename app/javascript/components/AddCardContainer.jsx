import { connect } from 'react-redux';
import AddCard from './AddCard';
import { createCard } from '../actions/CardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateCard: (title, callback) => {
      dispatch(createCard({ title }, ownProps.listId, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddCard);
