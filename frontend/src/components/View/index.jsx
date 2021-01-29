import React from 'react';

// Component includes
import Navbar from '../Navbar';
import Footer from '../Footer';
import AppMessages from '../AppMessages'

// Scoped styles
import './styles.css';

/**
 * Render a default view.
 */
export const View = ({ children, isLoaded }) => {
  return (
    <div id="page" className="page-wrapper">
      <AppMessages />
      <div className="page">

        {children}
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

/**
 * Render a view with a form container placed dead center on the screen.
 */
export const AuthView = ({ children, isLoaded }) => {
  return (
    <div id="page" className="page-wrapper">
      <AppMessages />
      <div className="page">
        <div className="view auth-view">
          {children}
        </div>
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

/**
 * Render a default view with padding for the navbar.
 */
export const ViewWithNavigation = ({ children, isLoaded }) => {
  return (
    <>
      <Navbar isLoaded={isLoaded} />
      <div id="page" className="page-wrapper with-navbar">
        <AppMessages />
        <div className="page">
          {children}
          <Footer isLoaded={isLoaded} />
        </div>
      </div>
    </>
  )
}

export const HomePageView = ({ children, isLoaded }) => {
  return (
    <>
      <Navbar isLoaded={isLoaded} />
      <div id="page" className="page-wrapper with-navbar">
        <AppMessages />
        {children}
      </div>
    </>
  )
}