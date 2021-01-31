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
        <div className='home-view__feed-item-container'>
          {homeFeedItems.length
            ? homeFeedItems.map(item => <FeedProduct key={`home-page-feed-${item.id}`} item={item} />)
            : ''}
        </div>
        {!homeFeedItems.length && (
          <>
            <div className='home-view__feed-awaiting'>
              <Loader type={'bubbles'} color={'#bbbbbb'} height={128} width={128} />
            </div>
          </>
        )}
      </div>
      <VisibilitySensor onChange={evt => append(evt)}>
        <div className='home-view__end-of-feed'>
          <div className='home-view__feed-appending'>
            <Loader type={'spin'} color={'#bbbbbb'} height={32} width={32} />
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

const FeedProduct = ({ item }) => {
  // Component state
  const [isInFavorites, setIsInFavorites] = useState(item.favorites && item.favorites.inCollection ? true : false);

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

  const sessionUser = useSelector(s => s.session.user);
  return (
    <div className='feed-item'>
      <Link to={`/businesses/${item.businessId}/products/${item.id}`}>
        <h3>{item.name}</h3>
      </Link>
      <p>{item.description}</p>
      {item.tags.length > 0 && (
        <ul className='feed-item__tags'>
          {item.tags.map(tag => (
            <li key={`product-${item.id}-tag-${tag}`}>{tag}</li>
          ))}
        </ul>
      )}
      <Stars qty={item.ratingCeiling} edit={'no-edit'} parentId={`home-page-feed-${item.id}`} />
      {sessionUser && (
        <div className='feed-item__session-controls'>
          <a
            href='/'
            onClick={preventDefault}
            className={`feed-item__add-to-favorites ${isInFavorites ? 'in-favorites' : 'not-in-favorites'}`}>
            <FaHeart onClick={toggleFavorites} />
          </a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
