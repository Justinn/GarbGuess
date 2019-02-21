import React from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../store/reducers/item';
import { addItemToInventory } from '../store/reducers/user';
import SingleItem from './SingleItem';

class Items extends React.Component {
  componentDidMount() {
    this.props.getAllItems();
    console.log(this.props.items);
  }

  addToInventory(id) {
    this.props.addItemToInventory(id);
  }

  render() {
    const { availableItems } = this.props.items;
    return (
      <div id="available-items">
        {availableItems.map(item => {
          return (
            <div key={item.id}>
              <SingleItem item={item} />
              <button onClick={() => this.addToInventory(item.id)}>
                Add to Inventory
              </button>
            </div>
          );
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
    addItemToInventory: id => dispatch(addItemToInventory(id)),
  };
};

const ConnectedItems = connect(
  mapState,
  mapDispatch
)(Items);

export default ConnectedItems;
