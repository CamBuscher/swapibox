import React, { Component } from 'react';
import mockData from '../../Data/Mock'
import FilmsDataHandler from '../../Helpers/FilmsDataHandler'
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl'
import Loading from '../Loading/Loading'
import MainPage from '../MainPage/MainPage'
import { 
  getOpeningCrawl, 
  callPeopleEndpoint, 
  callPlanetsEndpoint, 
  callVehiclesEndpoint 
} from '../../APIcalls'
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

  getCrawl = async () => {
    const openingCrawlData = await getOpeningCrawl()
    this.setState({loading: false, openingCrawlData})
  }

  closeCrawl = () => {
    this.setState({openingCrawlDisplayed : false})
  }

  findPeople = async () => {
    const arrayOfPeople = await callPeopleEndpoint()
    this.setState({ cards: arrayOfPeople })
  }

  findPlanets = async () => {
    const arrayOfPlanets = await callPlanetsEndpoint()
    this.setState({ cards: arrayOfPlanets })
  }

  findVehicles = async () => {
    const arrayOfVehicles = await callVehiclesEndpoint
    this.setState({ cards: arrayOfVehicles });
  }

  componentDidMount() {
    this.getCrawl()
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
          findPeople={this.findPeople}
          findPlanets={this.findPlanets}
          findVehicles={this.findVehicles}
          cards={this.state.cards}
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
