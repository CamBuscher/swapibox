import React, { Component } from 'react';
import mockData from '../../Data/Mock'
import FilmsDataHandler from '../../Helpers/FilmsDataHandler'
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl'
import Loading from '../Loading/Loading'
import MainPage from '../MainPage/MainPage'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      openingCrawlData: null,
      openingCrawlDisplayed: true,
      cards: [],
      favorites: []
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
        return <MainPage 
          favorites={this.state.favorites}
        />
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
