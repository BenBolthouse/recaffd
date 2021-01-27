import React from 'react';
import { Link } from 'react-router-dom'

// Scoped styles
import './styles.css';

const Footer = ({ isLoaded }) => {
  return (
    <div className='footer'>
      <div className='page-width'>

        {isLoaded && (
          <>
            <div className='footer__section-a'>
              <h3>Company (Filler Stuff)</h3>
              <ul>
                <li>
                  <Link to='/404'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/404'>Community Guidelines</Link>
                </li>
                <li>
                  <Link to='/404'>Community Guidelines</Link>
                </li>
                <li>
                  <Link to='/404'>Careers</Link>
                </li>
              </ul>
            </div>
            <div className='footer__section-b'>
              <h3>This Project (Real Stuff!)</h3>
              <ul>
                <li>
                  <Link to='/404'>Author's Github</Link>
                </li>
                <li>
                  <Link to='/404'>Author's LinkedIn</Link>
                </li>
                <li>
                  <Link to='/404'>Project Github</Link>
                </li>
              </ul>
            </div>
            <div className='footer__section-c'>
              <span>Created with love (and React!) by Ben Bolthouse 😎</span>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}

export default Footer;