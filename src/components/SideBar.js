import React from 'react';
import '../assets/css/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBoxOpen, faTags, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Welcome back</div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faUsers} className="sidebar-menu-icon" />
          Users
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faBoxOpen} className="sidebar-menu-icon" />
          Products
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faTags} className="sidebar-menu-icon" />
          Categories
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCog} className="sidebar-menu-icon" />
          Configuration
        </li>
        <li className="sidebar-menu-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-menu-icon" />
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;