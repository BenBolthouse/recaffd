import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './styles.css';
import './pattern.css';

export const View = ({ children, isLoaded }) => {
  return (
    <div className="page-wrapper">
      <div className="page">
        {children}
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

export const FormView = ({ children, isLoaded }) => {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="view form-view">
          {children}
        </div>
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

export const ViewWithNavigation = ({ children, isLoaded }) => {
  return (
    <>
      <Navbar isLoaded={isLoaded} />
      <div className="page-wrapper with-navbar">
        <div className="page">
          {children}
          <Footer isLoaded={isLoaded} />
        </div>
      </div>
    </>
  )
}