import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// State actions
import * as sessionActions from '../../store/session';

// Scoped styles
import './styles.css';

const Register = () => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(s => s.session.user);

  // State
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Redirect user to the home screen if there is a session
  useEffect(() => {
    if (sessionUser) history.push('/');
  }, [sessionUser, history]);

  // Event handlers
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      sessionActions.signup({
        username,
        emailAddress,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <div className='register'>
      <div className='register__form'>
        <form>
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
