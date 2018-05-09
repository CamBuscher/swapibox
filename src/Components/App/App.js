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
      arrayOfPeople: [],
      favorites: []
    }
  }

  closeCrawl = () => {
    this.setState({openingCrawlDisplayed : false})
  }

  callPeopleEndpoint = async () => {
    const response = await fetch('https://swapi.co/api/people')
    const peopleData = await response.json()
    const arrayOfPeople = await this.makePeopleObjects(peopleData.results)

    this.setState({arrayOfPeople})
  }

  async makePeopleObjects(peopleArray) {
    const people = peopleArray.map(async person => {
      const species = await this.fetchSpecies(person.species)
      const homeworld = await this.fetchHomeworldData(person.homeworld)
      return {
        ...homeworld,
        species,
        name: person.name
      }
    })

    return Promise.all(people)
  }

  async fetchSpecies(speciesEndpoint) {
    const speciesResponse = await fetch(speciesEndpoint)
    const species = await speciesResponse.json()
    return species.name
  }

  async fetchHomeworldData(homeworldEndpoint) {
    const homeworldResponse = await fetch(homeworldEndpoint)
    const homeworld = await homeworldResponse.json()
    return {
      homeworld: homeworld.name,
      homeworldPop: homeworld.population
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

    this.callPeopleEndpoint()

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
