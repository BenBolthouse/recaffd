import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import VisibilitySensor from 'react-visibility-sensor';
import Stars from '../Stars';
import { FaThumbsUp } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';

// State actions
import * as feedsActions from '../../store/feeds';

// Scoped styles
import './styles.css';

const HomePage = () => {
  // Hooks
  const dispatch = useDispatch();
  const feed = useSelector(s => s.feeds.home);

  // Component state
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [includeProducts, setIncludeProducts] = useState(false);
  const [includeBusinesses, setIncludeBusinesses] = useState(true);
  const [offset, setOffset] = useState(0);
  const [sortedBy, setSortedBy] = useState('BEST_RATED');
  const [limit, setLimit] = useState(10);

  // Side effects
  useEffect(() => {
    dispatch(
      feedsActions.fetchHomeFeed({
        sortedBy,
        offset,
        limit,
        includeProducts,
        includeBusinesses,
      })
    ).then(() => {
      setIsLoaded(true);
      setOffset(offset + limit);
    });
  }, []);

  // Event handlers
  const appendFeedItems = evt => {
    const lol = isFirstRender;
    if (!isFirstRender) {
      dispatch(
        feedsActions.fetchHomeFeed({
          sortedBy,
          offset,
          limit,
          includeProducts,
          includeBusinesses,
        })
      );
      return setOffset(offset + limit);
    }
    return setIsFirstRender(false);
  };

  return (
    <div className='home-view'>
      <div className='home-view__feed'>
        <div className='home-view__feed-item-container'>
          {feed.items.length
            ? feed.items.map(item => <FeedItem key={`home-page-feed-${item.id}`} item={item} />)
            : ''}
        </div>
        {!isLoaded && (
          <>
            <div className='home-view__feed-awaiting'>
              <Loader type={'bubbles'} color={'#bbbbbb'} height={128} width={128} />
            </div>
          </>
        )}
      </div>
      <VisibilitySensor onChange={appendFeedItems}>
        <div className='home-view__end-of-feed'>
          <div className='home-view__feed-appending'>
            <Loader type={'spin'} color={'#bbbbbb'} height={32} width={32} />
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

const FeedItem = ({ item }) => {
  const sessionUser = useSelector(s => s.session.user);
  return (
    <>
      {item.businessId && (
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
          <Stars qty={item.ratingCeiling} edit={'no-edit'} />
          {sessionUser && (
            <div className='feed-item__session-controls'>
              <a
                href='/'
                className={`feed-item__add-to-favorites ${
                  item.favorites ? 'in-favorites' : 'not-in-favorites'
                }`}>
                <FaThumbsUp />
              </a>
              <a
                href='/'
                className={`feed-item__add-to-checkins ${
                  item.checkins ? 'in-checkins' : 'not-in-checkins'
                }`}>
                <FaDoorOpen />
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
