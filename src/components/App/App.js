import React, { Component } from 'react';
import SavedLogs from '../saved-sessions/SavedLogs';
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
        <SavedLogs />
      </div>
    )
  }
}

export default App;