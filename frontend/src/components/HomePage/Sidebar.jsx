import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// State actions
import * as feedsActions from '../../store/feeds';

// Scoped styles
import './styles.css';

const Sidebar = ({ isLoaded }) => {
  return (
    <>
      {isLoaded &&
        <div id="sidebar" className="sidebar page-width">
          <div className="sidebar__item">
            ITEM
          </div>
        </div>
      }
    </>
  )
}

export default Sidebar;