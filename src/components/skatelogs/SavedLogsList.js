import React, { Component } from 'react'
import './SavedLogs.css';





export default class SavedLogsList extends Component {
  render() {
    return (
      <div className='container'>
        <header className='SavedLogList_header'>
          <h2> Saved Skate Logbook</h2>
        </header>
        <div className='SavedLogsList_data'>

        </div>
      </div>
    )
  }
}