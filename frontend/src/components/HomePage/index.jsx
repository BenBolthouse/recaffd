import React, { useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Components
import VisibilitySensor from 'react-visibility-sensor';

// Custom hooks
import { useDidMountEffect } from '../../hooks';

// TODO: delete next line
import mockProducts from '../../.local_mock/products';

// State actions
import * as feedsActions from '../../store/feeds';

// Scoped styles
import './styles.css';


const HomePage = () => {
  // Hooks
  const dispatch = useDispatch();
  const feed = useSelector(s => s.feeds.view);
  
  // Component state
  const isMounted = useRef(false);
  const [location, setLocation] = useState('view');
  const [includeProducts, setIncludeProducts] = useState(false);
  const [includeBusinesses, setIncludeBusinesses] = useState(true);
  const [offset, setOffset] = useState(0);
  const [sortedBy, setSortedBy] = useState('nameAlphabeticalDesc');
  const [limit, setLimit] = useState(20);
  const [appendCount, setAppendCount] = useState(0);

  useEffect(() => {
    console.log('useEffect...');
    console.log('location', location);
    dispatch(feedsActions.fetchCustomFeed({
      location,
      sortedBy,
      offset,
      limit,
      includeProducts,
      includeBusinesses,
    }))
    setOffset(o => offset + limit);
  }, [appendCount]);

  const scrolledToBottom = e => {
    console.log('Bottom of list hath been sroll\'d hitherto.')
  }
  
  return (
    <div className='home-view'>
      <div className='home-view__feed'>
        <ul>
          {feed.length && feed.map(item => (
            <li key={`home-page-feed-${item.name}`}>
              <FeedItem item={item} />
            </li>
          ))}
        </ul>
        <VisibilitySensor onChange={() => setAppendCount(appendCount + 1)}><div>AM I EVEN VISIBLE??</div></VisibilitySensor>
      </div>
      <div className='home-view__sidebar'>
        {`includeBusinesses: ${includeBusinesses}`}
        {`includeProducts: ${includeProducts}`}
        <button onClick={() => setIncludeBusinesses(true)}>Show businesses</button>
        <button onClick={() => setIncludeBusinesses(true)}>Show businesses</button>
        <button onClick={() => setAppendCount(appendCount + 1)}>Load more!!</button>
      </div>
    </div>
  );
};

const FeedItem = ({ item }) => {
  return (
    <div className='feed-item'>
      {item.name}
      {item.id}
    </div>
  );
};

export default HomePage;