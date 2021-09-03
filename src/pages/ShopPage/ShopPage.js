import React, { Component } from 'react';

import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
