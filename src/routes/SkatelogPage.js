import React, { Component } from 'react';
import SkatelogContext, { nullSkateLog } from '../contexts/SkatelogContext';
import SkatelogApiService from '../services/skatelogs-api-service';
import { NiceDate, Hyph, Section } from '../components/Utils/Utils';
import CommentForm from '../components/CommentForm/CommentForm';


export default class SkatelogPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SkatelogContext

  componentDidMount() {
    const { skatelogId } = this.props.match.params
    this.context.clearError()
    SkatelogApiService.getSkateLogs(skatelogId)
      .then(this.context.setSkateLog)
      .catch(this.context.setError)
    SkatelogApiService.getSkatelogComments(skatelogId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearSkateLog()
  }

  renderSkatelog() {
    const { skatelog, comments } = this.context
    return <>
      <h2>{skatelog.title}</h2>
      <p>
        <SkatelogAuthor skatelog={skatelog} />
        <Hyph />
        <NiceDate date={skatelog.date_created} />
      </p>
      <SkatelogContent skatelog={skatelog} />
      <SkatelogComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, skatelog } = this.context
    let content
    if (error) {
      content = (error.error === `Skatelog doesn't exist`)
        ? <p className='red'>Skatelog not found</p>
        : <p className='red'>There was an error</p>
    } else if (!skatelog.id) {
      content = <div className='loading' />
    } else {
      content = this.renderSkatelog()
    }
    return (
      <Section className='SkatelogPage'>
        {content}
      </Section>
    )
  }
}


function SkatelogAuthor({ skatelog = nullSkateLog }) {
  return (
    <span className='SkatelogPage_author'>
      {skatelog.author.full_name}
    </span>
  )
}

function SkatelogContent({ skatelog }) {
  return (
    <p className='SkatelogPage_content'>
      {skatelog.content}
    </p>
  )
}

function SkatelogComments({ comments = [] }) {
  return (
    <ul className='SkatelogPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='SkatelogPage__comment'>
          <p className='SkatelogPage__comment-text'>
            {comment.text}
          </p>
          <p className='SkatelogPage__comment-user'>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}

