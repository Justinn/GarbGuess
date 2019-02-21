import React from 'react';

class SingleItem extends React.Component {
  addToInventory(id) {
    console.log('added ' + id + ' to inventory');
  }

  render() {
    const { imageUrl, id } = this.props.item;
    return (
      <div>
        <img src={imageUrl} width="100vw" />
        <button onClick={() => this.addToInventory(id)}>
          Add to Inventory
        </button>
      </div>
    );
  }
}

export default SingleItem;
