import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NiceDate, Hyph } from '../Utils/Utils';
import './SkatelogListItem.css';



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
          <Hyph />
          <SkatelogAuthor skatelog={skatelog} />
          <SkatelogCommentCount skatelog={skatelog} />
        </footer>
      </Link>
    )
  }
}


function SkatelogDate({ skatelog }) {
  return (
    <span className='SkatelogListItem_date'>
      <NiceDate
        date={skatelog.date_created} />
    </span>
  )
}

function SkatelogAuthor({ skatelog }) {
  return (
    <span className='SkatelogListItem_author'>
      {skatelog.author.full_name}
    </span>
  )
}

function SkatelogCommentCount({ skatelog }) {
  return (
    <span
      className='SkatelogListItem_comment-count fa-layers fa-fw'>
      <span
        className='fa-layers-text fa-inverse'>
        {skatelog.number_of_comments}
      </span>
    </span>

  )
}