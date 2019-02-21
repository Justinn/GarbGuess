import React from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
// import { getUserData } from '../store/reducers/user';

class Inventory extends React.Component {
  componentDidMount() {
    // this.props.getUserData();
  }

  handleChange() {
    
  }

  render() {
    const { inventory } = this.props.user;
    return (
      <div id="inventory">
        <select onChange={this.handleChange}>
          <option value="winter">Winter</option>
          <option value="any">Any</option>
        </select>
        {inventory.map(item => (
          <SingleItem key={item.id} item={item} />
        ))}
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
  };
};

const ConnectedInventory = connect(
  mapState,
  mapDispatch
)(Inventory);

export default ConnectedInventory;
