import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDidMountEffect } from '../../hooks';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// State actions
import * as sessionActions from '../../store/session';
import * as queuesActions from '../../store/queues';

// Scoped styles
import './styles.css';
import './pattern.css';

const Login = () => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // Component state
  const [emailAddress, setEmailAddress] = useState('Email');
  const [password, setPassword] = useState('');

  // Handles login and app messages
  const onSubmit = async e => {
    e.preventDefault();
    if (!emailAddress || !password) {
      dispatch(queuesActions.pushAppMessage({
        message: 'Please provide your email and password to login.',
        type: 'warning',
      }));
    }
    if (emailAddress && password) {
      try {
        const { data } = await dispatch(
          sessionActions.login({
            emailAddress,
            password,
          })
        );
        history.push('/');
        const { username, firstName } = data.data;
        dispatch(queuesActions.pushAppMessage({
          message: `Welcome back, ${firstName ? firstName : username}!`,
          type: 'success',
        }));
      }
      catch (e) {
        dispatch(queuesActions.pushAppMessage({
          message: 'Could not login. Please try again.',
          type: 'danger',
        }));
      }
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="#" onSubmit={onSubmit}>
        <fieldset>
          <div className='login__input-group'>
            <input
              type='email'
              name='emailAddress'
              id='loginFormEmailAddress'
              placeholder='Email'
              onChange={e => setEmailAddress(e.target.value)} />
          </div>
          <div className='login__input-group'>
            <input
              type='password'
              name='password'
              id='loginFormPassword'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)} />
          </div>
          <button id='loginFormSubmit'>Login</button>
        </fieldset>
      </form>
      <div className='login__goto-register'>
        <span>
          Don't have an account? <Link to='/auth/register'>Create one here!</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
