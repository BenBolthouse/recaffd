import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

// State actions
import * as sessionActions from '../store/session';

// Scoped styles
import './styles.css';

// Views components
import { HomeView, View, ViewWithNav } from '../components/View';

// Other components
import Register from '../components/Register';
import Login from '../components/Login';
import HomePage from '../components/HomePage';

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // Get the session user on every first App render
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true))
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Switch path='/auth'>
          <Route path='/auth/login'>
            <View isLoaded={isLoaded}>
              <Login />
            </View>
          </Route>
          <Route path='/auth/register'>
            <View isLoaded={isLoaded}>
              <Register />
            </View>
          </Route>
          <Route path='/*'>
            <View isLoaded={isLoaded}>
              404
            </View>
          </Route>
        </Switch>
        <Switch path='/'>
          <Route exact path='/'>
            <HomeView isLoaded={isLoaded}>
              <HomePage />
            </HomeView>
          </Route>
          <Route exact path='/profile'>
            <ViewWithNav isLoaded={isLoaded}>
              Profile
            </ViewWithNav>
          </Route>
          <Route path='/collections/:id'>
            <ViewWithNav isLoaded={isLoaded}>
              Collections
            </ViewWithNav>
          </Route>
          <Route path='/businesses/:id'>
            <ViewWithNav isLoaded={isLoaded}>
              Businesses
            </ViewWithNav>
          </Route>
        </Switch>
        <Route path="*">404</Route>
      </Switch>
    </>
  );
};

export default App;
