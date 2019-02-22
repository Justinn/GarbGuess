import React from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
import { filterItems } from '../store/reducers/user';

class Inventory extends React.Component {
  componentDidMount() {
    // this.props.getUserData();
  }

  handleWeatherChange(evt) {
    this.props.filterItems(evt.target.value);
  }

  handleTypeChange(evt) {
    this.props.filterItems(evt.target.value);
  }

  handleColorChange(evt) {
    this.props.filterItems(evt.target.value);
  }

  render() {
    const { inventory, filteredItems } = this.props.user;
    return (
      <div id="inventory">
        <div id="weather-filter">
          Weather Filter:
          <select onChange={this.handleWeatherChange.bind(this)}>
            <option value="any">Any</option>
            <option value="winter">Winter</option>
            <option value="fall">Fall</option>
          </select>
        </div>
        <div id="type-filter">
          Type Filter:
          <select onChange={this.handleTypeChange.bind(this)}>
            <option value="any">Any</option>
            <option value="head">Head</option>
            <option value="legs">Legs</option>
            <option value="socks">Socks</option>
            <option value="body">Body</option>
          </select>
        </div>
        <div id="color-filter">
          Color Filter:
          <select onChange={this.handleColorChange.bind(this)}>
            <option value="any">Any</option>
            <option value="brown">Brown</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        Your Inventory:
        {inventory.map(item => (
          <SingleItem key={item.id} item={item} />
        ))}
        <div id="filtered-inventory">
          Filtered Inventory:
          {filteredItems.map(item => (
            <SingleItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.users,
  };
};

const mapDispatch = dispatch => {
  return {
    getUserData: () => dispatch(getUserData()),
    filterItems: weather => dispatch(filterItems(weather)),
  };
};

const ConnectedInventory = connect(
  mapState,
  mapDispatch
)(Inventory);

export default ConnectedInventory;
