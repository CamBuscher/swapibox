import React, { Component } from 'react';
import mockData from '../../Data/Mock'
import FilmsDataHandler from '../../Helpers/FilmsDataHandler'
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      openingCrawlData: null
    }
  }

  componentDidMount() {
    const allCrawlData = new FilmsDataHandler(mockData)
    const randomlyChosenCrawl = 
      allCrawlData.data[Math.floor(Math.random() * allCrawlData.data.length)]
    this.setState({
      loading: false,
      openingCrawlData: randomlyChosenCrawl
    })
  }

  render() {
    const loadingCheck = this.state.loading ? 
      `Loading...` :
      <OpeningCrawl crawlInfo={this.state.openingCrawlData} />

    return (
      <div className="App">
        {loadingCheck}
      </div>
    )
  }
}

export default App;
