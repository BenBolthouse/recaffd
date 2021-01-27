import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// State actions
import * as sessionActions from '../../store/session';

// Scoped styles
import './styles.css';

const Login = () => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(s => s.session.user);

  // Component state
  const [emailAddress, setEmailAddress] = useState('Email');
  const [password, setPassword] = useState('');

  // Event handlers
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      sessionActions.login({
        emailAddress,
        password,
      })
    );
  };

  // Redirect user to the home screen if there is a session
  useEffect(() => {
    if (sessionUser) history.push('/');
  }, [sessionUser, history]);

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
