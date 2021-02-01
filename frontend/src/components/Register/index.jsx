import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// State actions
import * as sessionActions from '../../store/session';
import * as queuesActions from '../../store/queues';

// Scoped styles
import './styles.css';

const Register = () => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(s => s.session.user);

  // Component state
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Redirect user to the home screen if there is a session
  useEffect(() => {
    if (sessionUser) history.push('/');
  }, [sessionUser, history]);

  // Event handlers
  const onSubmit = async e => {
    e.preventDefault();
    if (!username || !emailAddress || !password || !confirmPassword) {
      return dispatch(
        queuesActions.pushAppMessage({
          message: 'Please provide your email and password to login.',
          type: 'warning',
        })
      );
    }
    try {
      await dispatch(
        sessionActions.signup({
          username,
          emailAddress,
          password,
          confirmPassword,
        })
      );
      history.push('/auth/login');
      return dispatch(queuesActions.pushAppMessage({
        message: `Account created. Please login.`,
        type: 'success',
      }));
    }
    catch (e) {
      return await dispatch(queuesActions.pushAppMessage({
        message: 'Could not create your account. Please try again.',
        type: 'danger',
      }));
    }
  };

  return (
    <div className='register'>
      <div className='register__form'>
        <form onSubmit={onSubmit}>
          <fieldset>
            <div className='login__input-group'>
              <input
                type='text'
                name='username'
                id='loginFormUsernameAddress'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='login__input-group'>
              <input
                type='email'
                name='emailAddress'
                id='loginFormEmailAddress'
                placeholder='Email'
                value={emailAddress}
                onChange={e => setEmailAddress(e.target.value)}
              />
            </div>
            <div className='login__input-group'>
              <input
                type='password'
                name='password'
                id='loginFormPassword'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='login__input-group'>
              <input
                type='password'
                name='confirmPassword'
                id='loginFormConfirmPassword'
                placeholder='Retype password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            <button id='loginFormSubmit'>Create account</button>
          </fieldset>
        </form>
        <div className='register__goto-login'>
          <span>
            Already have an account? <Link to='/auth/login'>Login here...</Link>
          </span>
        </div>
      </div>
      <div className='register__marketing'>
        <h1>Drink Coffee & Be Awesome</h1>
        <p>
          Those are basically all the requirements to create an account.{' '}
          <strong>It's free to sign up!</strong> Join others in your community on the hunt for a
          good cup of coffee.
        </p>
        <span className='register__privacy-policy'>
          Read our <a href='/'>privacy policy.</a>
        </span>
      </div>
    </div>
  );
};

export default Register;
