import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

// State actions
import * as sessionActions from '../store/session';

// Scoped styles
import './styles.css';

// Views components
import { FormView, View, ViewWithNavigation } from '../components/View';

// Other components
import Register from '../components/Register';
import Login from '../components/Login';

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
            <FormView isLoaded={isLoaded}>
              <Login />
            </FormView>
          </Route>
          <Route path='/auth/register'>
            <FormView isLoaded={isLoaded}>
              <Register />
            </FormView>
          </Route>
          <Route path='/*'>
            <View isLoaded={isLoaded}>
              404
            </View>
          </Route>
        </Switch>
        <Switch path='/'>
          <Route exact path='/'>
            <ViewWithNavigation isLoaded={isLoaded}>
              Home Page
            </ViewWithNavigation>
          </Route>
          <Route exact path='/profile'>
            <ViewWithNavigation isLoaded={isLoaded}>
              Profile
            </ViewWithNavigation>
          </Route>
          <Route path='/collections/:id'>
            <ViewWithNavigation isLoaded={isLoaded}>
              Collections
            </ViewWithNavigation>
          </Route>
          <Route path='/businesses/:id'>
            <ViewWithNavigation isLoaded={isLoaded}>
              Businesses
            </ViewWithNavigation>
          </Route>
        </Switch>
        <Route path="*">404</Route>
      </Switch>
    </>
  );
};

export default App;
