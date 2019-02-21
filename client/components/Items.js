import React from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../store/reducers/item';
import SingleItem from './SingleItem';

class Items extends React.Component {
  componentDidMount() {
    this.props.getAllItems();
    console.log(this.props.items);
  }

  render() {
    const { availableItems } = this.props.items;
    return (
      <div id="available-items">
        {availableItems.map(item => {
          return <SingleItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    items: state.items,
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
