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
    let allCrawlData
    let randomlyChosenCrawl
    fetch(`https://swapi.co/api/films/`)
      .then(data => data.json())
      .then(parsedData => {
        allCrawlData = new FilmsDataHandler(parsedData)
        randomlyChosenCrawl =
          allCrawlData.data[Math.floor(Math.random() * allCrawlData.data.length)]
        this.setState({
          loading: false,
          openingCrawlData: randomlyChosenCrawl
        })
      })
      .catch(err => {
        console.log(err, 'oops')
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
