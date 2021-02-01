import React, { useEffect, useState } from 'react';
import Loader from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch } from '../../store/csrf';

// Components
import VisibilitySensor from 'react-visibility-sensor';
import Stars from '../Stars';
import { FaHeart } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';

// State actions
import * as feedsActions from '../../store/feeds';

// Scoped styles
import './styles.css';

const HomePage = () => {
  // Hooks
  const dispatch = useDispatch();
  const homeFeed = useSelector(s => s.feeds.home);
  const homeFeedItems = useSelector(s => s.feeds.home.items);

  // Component state
  const [appendCount, setAppendCount] = useState(true);
  const [offset, setOffset] = useState(0);

  // Side effects
  useEffect(() => {
    dispatch(
      feedsActions.setHomeFeed({ ...homeFeed, offset })
    ).then(() => {
      setOffset(offset + homeFeed.limit);
    });
  }, [appendCount]);

  // Event handlers
  const append = evt => {
    if (evt) return setAppendCount(appendCount + 1);
  }

  return (
    <div className='home-view'>
      <div className='home-view__feed'>
        <div>
          {homeFeedItems.length
            ? homeFeedItems.map(item => <FeedItem key={`home-page-feed-${item.id}`} item={item} />)
            : ''}
        </div>
        {!homeFeedItems.length && (
          <>
            <div className='home-view__feed-awaiting'>
              <Loader type={'bubbles'} color={'#bbbbbb'} height={128} width={128} />
            </div>
          </>
        )}
        <VisibilitySensor onChange={evt => append(evt)}>
          <div>.</div>
        </VisibilitySensor>
      </div>
    </div>
  );
};

const FeedItem = ({ item }) => {
  // Component state
  const [isInFavorites, setIsInFavorites] = useState(item.favorites && item.favorites.inCollection ? true : false);

  // Redux state
  const sessionUser = useSelector(s => s.session.user);
  
  // Event handlers
  const preventDefault = e => e.preventDefault();

  const toggleFavorites = async () => {
    if (!isInFavorites) {
      const res = await fetch('/api/collections/favorites', {
        method: 'PATCH',
        body: JSON.stringify({
          itemId: item.id,
          itemType: 'product',
          collectionId: item.favorites.collectionId,
        }),
      });
      if (res.ok) setIsInFavorites(true);
      return;
    }
    const res = await fetch('/api/collections/favorites', {
      method: 'DELETE',
      body: JSON.stringify({
        itemId: item.id,
        itemType: 'product',
        collectionId: item.favorites.collectionId,
      }),
    });
    if (res.ok) setIsInFavorites(false);
    return;
  };

  return (
    <>
    {item.businessId ? 
    <div className='feed-item product'>
      <div className='feed-item__section-a'>
        <span className='name'>
          <Link to={`/businesses/${item.businessId}/products/${item.id}`}>
            {item.name}
          </Link>
        </span>
        <span className='from'>
          by{' '}
          <Link to={`/businesses/${item.businessId}`}>
            {item.business.name}
          </Link>
        </span>
      </div>
      <div className='feed-item__section-b'>
        <Stars qty={item.ratingCeiling} />
      </div>
      <div className='feed-item__section-c'>
        <span className='description'>
          {item.description}
        </span>
            {sessionUser ? 
              <FaHeart
                onClick={toggleFavorites}
                className={isInFavorites ? 'in-favorites' : 'not-in-favorites'} /> : ''}
      </div>
    </div> : ''
    }
    </>
  );
};

export default HomePage;
