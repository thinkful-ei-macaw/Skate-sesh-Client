import React, { Component } from 'react';
import LandingSite from '../components/LandingSite/LandingSite';
import { Section } from '../components/Utils/Utils';



export default class LandingSitePage extends Component {




  render() {
    return (
      <Section className='LandingsitePage'>
        <LandingSite />
      </Section>
    )
  }
}

