import React, { Component } from 'react';
import './Navbar.css'





class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul className="nav-links">
          <li><a href="#main">Home</a></li>
          <li><a href="#Create-Sesh">Create-Sesh</a></li>
          <li><a href="#Skatelogs">Skatelogs</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;