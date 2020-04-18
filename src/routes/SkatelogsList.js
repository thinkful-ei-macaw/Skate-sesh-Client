import React, { Component } from 'react';
import SkatelogListContext from '../contexts/SkatelogListContext';
import SkatelogsApiService from '../services/skatelogs-api-service';
import { section } from '../components/Utils/Utils';

export default class SkatelogsListPage extends Component {

  static contextType = SkatelogListContext

  componentDidMount() {
    this.context.clearError()
    SkatelogsApiService.getSkatelogs()
      .then(this.context.setSkateList)
      .catch(this.context.setError)
  }



}