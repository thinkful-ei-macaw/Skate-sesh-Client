import React, { Component } from 'react';
import SkatelogListContext from '../contexts/SkatelogListContext';
import SkatelogsApiService from '../services/skatelogs-api-service';
import { Section } from '../components/Utils/Utils';
import SavedLogsList from '../components/skatelogListItem/SkateLogListItem';

export default class SkatelogsListPage extends Component {

  static contextType = SkatelogListContext

  componentDidMount() {
    this.context.clearError()
    SkatelogsApiService.getSkatelogs()
      .then(this.context.setSkateList)
      .catch(this.context.setError)
  }

  renderSavedLogsList() {
    const { skatelogsList = [] } = this.context
    return skatelogsList.map(skatelogs =>
      <SavedLogsList
        key={skatelogs.id}
        skatelogs={skatelogs} />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='skateLogsListPage'>
        {error
          ? <p className='red'> There was an error, try again</p>
          : this.renderSavedLogsList()}
      </Section>

    )
  }


}