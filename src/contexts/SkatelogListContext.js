import React, { Component } from 'react';


const SkatelogListContext = React.createContext({
  skatelogList: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setskatelogList: () => { },
})
export default SkatelogListContext;

export class SkatelogListProvider extends Component {
  state = {
    skatelogList: [],
    error: null
  };

  setSkatelogList = skatelogList => {
    this.setState({ skatelogList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      skatelogList: this.state.skatelogList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSkatelogList: this.setSkatelogList,
    }
    return (
      <SkatelogListContext.Provider value={value}>
        {this.props.children}
      </SkatelogListContext.Provider>
    )
  }
}