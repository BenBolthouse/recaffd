import React, { useState } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// State actions
import * as sessionActions from '../../store/session';
import * as queueActions from '../../store/queues';

// Scoped styles
import './styles.css'

const Navbar = ({ isLoaded }) => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  // Component state
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);

  // Event handlers
  const toggleUserMenu = e => {
    e.preventDefault();
    setUserMenuIsOpen(!userMenuIsOpen);
  };
  const logUserOut = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
      .then(() => {
        history.push('/');
        dispatch(queueActions.pushAppMessage({
          message: 'You have been logged out.',
          type: 'success'
        }))
      });
  }

  return (
    <div id="navbar" className="navbar">
      <div className="page-width">
        {isLoaded &&
          <>
            <Link className='navbar__section-a' to='/'>
              <img src="/images/logo_48.svg" alt="Logo" />
              <span className="brand-a">Recaffd</span>
            </Link>
            <div className='navbar__section-b'>
              <input type="text"
                id="navbarSearchInput"
                placeholder="Search for drinks or businesses..." />
            </div>
            <div className='navbar__section-c'>

              {sessionUser &&
                <a
                  href="/"
                  className='navbar__session'
                  onClick={toggleUserMenu}>
                  <img
                    src={`/images/user-${sessionUser.id}_default_48.jpg`}
                    alt="Profile" />
                  <span
                    className="navbar__username">
                      {sessionUser.username}</span>
                  <span
                    className="navbar__email">
                      {sessionUser.emailAddress}</span>
                  <div
                    className="navbar__profile-options-caret">
                      <AiOutlineCaretDown /></div>
                </a>
              }

              {(sessionUser && userMenuIsOpen) &&
                <ul className="navbar__user-menu" onMouseLeave={toggleUserMenu}> 
                  <Link to="/profile"><li>My Profile</li></Link>
                  <Link to="/collections"><li>My Collections</li></Link>
                  <a href="/" onClick={logUserOut}><li>Logout</li></a>
                </ul>
              }

              {!sessionUser &&
                <div className='navbar__no-session'>
                  <Link className="navbar__auth-link" to="/auth/login">Login</Link>
                  <Link className="navbar__auth-link" to="/auth/register">Register</Link>
                </div>
              }

            </div>
          </>
        }
      </div>
    </div>
  )
};

export default Navbar;
