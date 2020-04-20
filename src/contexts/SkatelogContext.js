import React, { Component } from 'react'

export const nullSkateLog = {
  author: {},
}

const SkatelogContext = React.createContext({
  skatelog: nullSkateLog,
  comments: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setSkateLog: () => { },
  clearSkateLog: () => { },
  setComments: () => { },
  addComment: () => { },
})

export default SkatelogContext;

export class SkatelogProvider extends Component {
  state = {
    skatelog: nullSkateLog,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSkateLog = skateLog => {
    this.setState({ skateLog })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearSkateLog = () => {
    this.setSkateLog(nullSkateLog)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      skateLog: this.state.skateLog,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSkateLog: this.setSkateLog,
      setComments: this.setComments,
      clearSkateLog: this.clearSkateLog,
      addComment: this.addComment,
    }
    return (
      <SkatelogContext.Provider value={value}>
        {this.props.children}
      </SkatelogContext.Provider>
    )
  }
}
