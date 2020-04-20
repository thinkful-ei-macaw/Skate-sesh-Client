import React, { Component } from 'react';
import SkatelogContext from '../../contexts/SkatelogContext';
import SkatelogsApiService from '../../services/skatelogs-api-service';
import { Button, TextArea } from '../Utils/Utils';

export default class CommentForm extends Component {
  static contextType = SkatelogContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { skatelog } = this.context
    const { text } = ev.target
    SkatelogsApiService.postComment(skatelog.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}>
        <div className='text'>
          <TextArea
            required
            aria-label='Type a comment..'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </TextArea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
