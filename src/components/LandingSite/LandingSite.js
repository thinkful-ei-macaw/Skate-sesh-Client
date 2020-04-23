import React, { Component } from 'react';
import { Link } from 'react-router-dom';






export default class LandingSite extends Component {


  render() {
    return (
      <Link to={'/'}
        className='LandingSite'>
        <h1 className='homePage'>
          Skatesesh HomePage
        </h1>
        <p>Everything you need to get you started</p>
      </Link>
    )
  }
}


