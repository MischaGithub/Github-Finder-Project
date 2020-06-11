// Imported files we have the proptypes
// And the links available to navigate between pages
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Using functional Component and destructing method
const Navbar = ({ icon, title }) => {
  return (
    // Creating the navbar with its icon
    // And then the Home and About links
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  // Setting default props
  title: "Github Finder",
  icon: "fab fa-github",
};

// Declaring the PropTypes to a string format and setting it to is required
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
