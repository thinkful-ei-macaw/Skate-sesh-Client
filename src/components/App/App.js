import React, { Component } from 'react';
import SavedLogsList from '../skatelogs/SavedLogsList';
import Navbar from '../navbar/Navbar';



class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }


  render() {
    return (
      <div className='App'>
        <Navbar />
        <SavedLogsList />
      </div>
    )
  }
}

export default App;