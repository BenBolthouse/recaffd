import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCheckSquare, AiOutlineCheckSquare } from 'react-icons/ai';

// State actions
import * as feedsActions from '../../store/feeds';

// Scoped styles
import './styles.css';

const Sidebar = ({ isLoaded }) => {
  // Hooks
  const dispatch = useDispatch();
  const homeFeed = useSelector(s => s.feeds.home);
  const homeFeedSortedBy = useSelector(s => s.feeds.home.sortedBy);
  const sessionUser = useSelector(s => s.session.user);

  // Event handlers
  const sortAZ = evt => {
    if (homeFeedSortedBy === 'NAME_ASC') return;
    scrollTop();
    dispatch(
      feedsActions.resetHomeFeed({ ...homeFeed, sortedBy: 'NAME_ASC', offset: 0, limit: 10 })
    );
  };
  const sortZA = evt => {
    if (homeFeedSortedBy === 'NAME_DESC') return;
    scrollTop();
    dispatch(
      feedsActions.resetHomeFeed({ ...homeFeed, sortedBy: 'NAME_DESC', offset: 0, limit: 10 })
    );
  };
  const sortBestRated = evt => {
    if (homeFeedSortedBy === 'RATING_DESC') return;
    scrollTop();
    dispatch(
      feedsActions.resetHomeFeed({ ...homeFeed, sortedBy: 'RATING_DESC', offset: 0, limit: 10 })
    );
  };
  const sortWorstRated = evt => {
    if (homeFeedSortedBy === 'RATING_ASC') return;
    scrollTop();
    dispatch(
      feedsActions.resetHomeFeed({ ...homeFeed, sortedBy: 'RATING_ASC', offset: 0, limit: 10 })
    );
  };
  const scrollTop = () => {
    document.getElementById('page').scrollTop = 0;
  };

  return (
    <>
      {isLoaded && (
        <div id='sidebar' className='sidebar page-width'>
          {sessionUser ? (
            <div className='sidebar__item session'>
              <img src='/images/user-501_default_48.jpg' alt='Profile' />
              <h3>{sessionUser.username}</h3>
              <Link to='/profile'>Go to profile</Link>
            </div>
          ) : (
            <div className='sidebar__item no-session'>
              <h3>Wait a minute...who are you?</h3>
              <p>
                <Link to='/auth/login'>Login</Link> or{' '}
                <Link to='/auth/register'>create an account</Link> to do things like save your
                favorite drinks and coffee shops.
              </p>
            </div>
          )}
          <div className='sidebar__item sort-feed'>
            <h3>Sort By</h3>
            <div className={homeFeedSortedBy === 'NAME_ASC' ? 'active' : 'inactive'} onClick={sortAZ}>
              {homeFeedSortedBy === 'NAME_ASC' ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
              <span>Name A-Z</span>
            </div>
            <div className={homeFeedSortedBy === 'NAME_DESC' ? 'active' : 'inactive'} onClick={sortZA}>
              {homeFeedSortedBy === 'NAME_DESC' ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
              <span>Name Z-A</span>
            </div>
            <div className={homeFeedSortedBy === 'RATING_DESC' ? 'active' : 'inactive'}
              onClick={sortBestRated}>
              {homeFeedSortedBy === 'RATING_DESC' ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
              <span>Sort Best Rated</span>
            </div>
            <div className={homeFeedSortedBy === 'RATING_ASC' ? 'active' : 'inactive'}
              onClick={sortWorstRated}>
              {homeFeedSortedBy === 'RATING_ASC' ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
              <span>Sort Worst Rated</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
