import React from 'react';

// Component includes
import Navbar from '../Navbar';
import Footer from '../Footer';
import AppMessages from '../AppMessages'

// Scoped styles
import './styles.css';
import './pattern.css';

/**
 * Render a default view.
 */
export const View = ({ children, isLoaded }) => {
  return (
    <div className="page-wrapper">
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
export const FormView = ({ children, isLoaded }) => {
  return (
    <div className="page-wrapper">
      <AppMessages />
      <div className="page">
        <div className="view form-view">
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
      <div className="page-wrapper with-navbar">
        <AppMessages />
        <div className="page">
          {children}
          <Footer isLoaded={isLoaded} />
        </div>
      </div>
    </>
  )
}