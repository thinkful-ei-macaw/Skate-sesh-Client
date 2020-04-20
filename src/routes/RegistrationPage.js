import React, { Component } from 'react';
import { Section } from '../components/Utils/Utils';
import RegistrationForm from '../components/create-user-form/RegistrationForm';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSucces = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSucces}
        />
      </Section>
    )
  }

}