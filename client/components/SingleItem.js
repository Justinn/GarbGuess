import React from 'react';

class SingleItem extends React.Component {
  render() {
    const { imageUrl } = this.props.item;
    return (
      <div>
        <img src={imageUrl} width="100vw" />
      </div>
    );
  }
}

export default SingleItem;
