import React, { Component } from 'react'
import './SavedLogs.css';
import { Link } from 'react-router-dom';




class SavedLogs extends Component {
  render() {
    const { logbook } = this.props;
    return (
      <div className="seshLogscontainer">
        <header>
          <h1>Skate Logbook</h1>
        </header>

      </div>
    )
  }
}

export default SavedLogs;