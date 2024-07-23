// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProductHunt, FaCog, FaAdversal} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome />
        <Link to="/">Home</Link>
      </div>
      <div className="sidebar-item">
        <FaProductHunt />
        <Link to="/products">Products</Link>
      </div>
      <div className="sidebar-item">
        <FaCog />
        <Link to="/settings">Settings</Link>
      </div>
      <div className="sidebar-item">
        <FaAdversal  />
        <Link to="/Button">Button</Link>
      </div>
    </div>
  );
}

export default Sidebar;
