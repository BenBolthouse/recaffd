import React from 'react';

// Component includes
import AppMessages from '../AppMessages';
import Navbar from '../Navbar';
import Sidebar from '../HomePage/Sidebar';

// Scoped styles
import './styles.css';


export const ViewWithNav = ({ children, isLoaded }) => {
  return (
    <>
      <Navbar isLoaded={isLoaded} />
      <AppMessages />
      <div id="page" className="page-wrapper with-navbar">
        <div className="page page-width">
          {children}
        </div>
      </div>
    </>
  )
}

export const AuthView = ({ children, isLoaded }) => {
  return (
    <>
      <AppMessages />
      <div id="page" className="page-wrapper">
        <div className="page">
          <div className="view auth-view">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export const HomeView = ({ children, isLoaded }) => {
  return (
    <>
      <Sidebar isLoaded={isLoaded} />
      <Navbar isLoaded={isLoaded} />
      <AppMessages />
      <div id="page" className="page-wrapper with-navbar">
        <div className="page page-width no-cols">
          {children}
        </div>
      </div>
    </>
  )
}
