import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NiceDate, Hyph } from '../Utils/Utils';
import './SkateLogListItem.css';



export default class SkateLogListItem extends Component {
  render() {
    const { skatelog } = this.props
    return (
      <Link to={`/skatelogs/${skatelog.id}`}
        className='SkatelogListItem'>
        <header className='SkatelogListItem_header'>
          <h2 className='SkatelogListItem_heading'>
            {skatelog.title}
          </h2>
          <SkatelogDate skatelog={skatelog} />
        </header>
        <footer className='SkatelogListItem_footer'>
          <SkatelogStyle skatelog={skatelog} />
          {skatelog.author.id && <>
            <Hyph />
            <SkatelogAuthor skatelog={skatelog} />
          </>}
          <SkatelogCommentCount skatelog={skatelog} />
        </footer>
      </Link>
    )
  }
}

