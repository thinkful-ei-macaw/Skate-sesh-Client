import React, { Component } from 'react';




class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }


  render() {
    return (
      <div className='App'>

      </div>
    )
  }
}

export default App;