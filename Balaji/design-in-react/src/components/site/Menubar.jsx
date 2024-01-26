import React from "react";
import "../../assets/css/menu.css";
import logo from "../../assets/images/logo.jpg";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { RxGear } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Menubar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
