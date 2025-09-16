import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Because React’s rendering model is different:
// Angular runs change detection everywhere (it keeps checking).
// React only redraws when you tell it something changed (via useState, useReducer, etc.).
const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  
  const toggleDropDown = (index) => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const menuClass = "menu";
  const selectedMenuClass = "menu selected";

    return (
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(0)}>
                <p  className={selectedMenu === 0 ? selectedMenuClass : menuClass}>
                  Dashboard
                </p>
                </Link>
            </li>
            <li>
                 <Link to="/orders" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(1)}>
                <p  className={selectedMenu === 1 ? selectedMenuClass : menuClass}>
                  Orders
                </p>
                </Link>
            </li>
            <li>
                <Link to="/holdings" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(2)}>
                <p  className={selectedMenu === 2 ? selectedMenuClass : menuClass}>
                  Holdings
                </p>
                </Link>
            </li>
            <li>
               <Link to="/positions" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(3)}>
                <p  className={selectedMenu === 3 ? selectedMenuClass : menuClass}>
                  Positions
                </p>
                </Link>
            </li>
            <li>
                 <Link to="/funds" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(4)}>
                <p  className={selectedMenu === 4 ? selectedMenuClass : menuClass}>
                  Funds
                </p>
                </Link>
            </li>
            <li>
                 <Link to="/apps" style={{ textDecoration: 'none'}} onClick={() => handleMenuClick(5)}>
                <p  className={selectedMenu === 5 ? selectedMenuClass : menuClass}>
                  Apps
                </p>
                </Link>
            </li>
          </ul>
        <hr />
        <div className="profile" onClick={toggleDropDown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
      );
}

export default Menu;