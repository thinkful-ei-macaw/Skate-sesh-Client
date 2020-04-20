import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hyph } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import './header.css';

export default class header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
          </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header_not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          Skate-Sesh
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }

}



// class Navbar extends Component {

//   render() {
//     return (
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#main">Home</a></li>
//           <li><a href="#Create-Sesh">Create-Sesh</a></li>
//           <li><a href="#Skatelogs">Skatelogs</a></li>
//         </ul>
//       </nav>
//     )
//   }
// }

// export default Navbar;