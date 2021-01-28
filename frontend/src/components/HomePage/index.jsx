import React, { useEffect, useState } from 'react';
import { useDidMountEffect } from '../../hooks';
import mockProducts from '../../.local_mock/products';

// Scoped styles
import './styles.css';


const HomePage = () => {
  const [feedItems, setFeedItems] = useState([]);
  const quantityPerFetch = 15;

  useEffect(() => {
    const fetchedItems = mockProducts.slice(0, quantityPerFetch);
    setFeedItems(fetchedItems);
    console.log(mockProducts);
  }, [mockProducts]);

  return (
    <div className='home-view'>
      <div className='home-view__feed'>
        <ul>
          {feedItems.map(item => (
            <li key={`home-page-feed-${item.name}`}>
              <FeedItem item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className='home-view__sidebar'></div>
    </div>
  );
};

const FeedItem = ({ item }) => {
  return (
    <div className='feed-item'>
      {item.name}
    </div>
  );
};

export default HomePage;