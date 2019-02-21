import React from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../store/reducers/item';

class Items extends React.Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    return <div>Available items</div>;
  }
}

const mapState = state => {
  return {
    items: state.availableItems,
  };
};

const mapDispatch = dispatch => {
  return {
    getAllItems: () => dispatch(getAllItems()),
 };
};

const ConnectedItems = connect(
  mapState,
  mapDispatch
)(Items);

export default ConnectedItems;
