import React, { Component } from 'react';
import mockData from '../../Data/Mock'
import FilmsDataHandler from '../../Helpers/FilmsDataHandler'
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl'
import Loading from '../Loading/Loading'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      openingCrawlData: null,
      openingCrawlDisplayed: true
    }
  }

  closeCrawl = () => {
    this.setState({openingCrawlDisplayed : false})
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
    const determineRender = () => {
      if (this.state.openingCrawlDisplayed === true) {
        return <OpeningCrawl 
          crawlInfo={this.state.openingCrawlData}
          closeCrawl={this.closeCrawl} 
        />
      } else {
        return <p> whoops </p>
      }
    }

    const loadingCheck = this.state.loading ? 
      <Loading /> :
      determineRender()

    return (
      <div className="App">
        {loadingCheck}
      </div>
    )
  }
}

export default App;
