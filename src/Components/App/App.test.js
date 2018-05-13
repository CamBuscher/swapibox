import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as APIcalls from '../../APIcalls';
import App from './App';

describe('app', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('should match snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const expected = {
      loading: true,
      openingCrawlData: null,
      openingCrawlDisplayed: true,
      cards: [],
      favorites: [],
      displayedCategory: null
    };

    expect(app.instance().state).toEqual(expected);
  });

  describe('getCrawl', () => {
    it('should call getOpeningCrawl', async() => {
      APIcalls.getOpeningCrawl = jest.fn().mockReturnValue({
        crawl: 'blah blah',
        release_date: 123,
        title: 'great movie'
      });
      await app.instance().getCrawl();

      expect(APIcalls.getOpeningCrawl).toHaveBeenCalled();
    });

    it('should set the App\'s state', async () => {
      const expectation = {
        crawl: 'blah blah',
        release_date: 123,
        title: 'great movie'
      };

      APIcalls.getOpeningCrawl = jest.fn().mockReturnValue(expectation);
      await app.instance().getCrawl();

      expect(app.instance().state.loading).toEqual(false);
      expect(app.instance().state.openingCrawlData).toEqual(expectation);
    });
  });

  describe('closeCrawl', () => {
    it('should change app state of openingCrawlDisplayed to false', () => {
      app.instance().closeCrawl();

      expect(app.instance().state.openingCrawlDisplayed).toEqual(false);
    });
  });

  describe('findPeople', () => {
    it('should call callPeopleEndpoint', () => {
      const expectation = [{
        homeworld: "Tatooine",
        homeworldPop: "200000",
        name: "Luke Skywalker",
        species: "Human"
      }];
      APIcalls.callPeopleEndpoint = jest.fn().mockReturnValue(expectation);

      app.instance().findPeople();
      expect(APIcalls.callPeopleEndpoint).toHaveBeenCalled();
    });

    it('should set cards state and displayedCategory state', async () => {
      const expectation = [{
        homeworld: "Tatooine",
        homeworldPop: "200000",
        name: "Luke Skywalker",
        species: "Human"
      }];
      APIcalls.callPeopleEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findPeople();
      
      expect(app.instance().state.displayedCategory).toEqual('people');
      expect(app.instance().state.cards).toEqual(expectation);
    });
  });

  describe('findPlanets', () => {
    it('should call callPlanetsEndpoint', async () => {
      const expectation = [{
        climate: "temperate",
        name: "Alderaan",
        population: "2000000000",
        residents: [],
        terrain: "grasslands, mountains"
      }];

      APIcalls.callPlanetsEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findPlanets();

      expect(APIcalls.callPlanetsEndpoint).toHaveBeenCalled();
    });

    it('should set cards state and displayedCategory state', async () => {
      const expectation = [{
        climate: "temperate",
        name: "Alderaan",
        population: "2000000000",
        residents: [],
        terrain: "grasslands, mountains"
      }];

      APIcalls.callPlanetsEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findPlanets();

      expect(app.instance().state.cards).toEqual(expectation);
      expect(app.instance().state.displayedCategory).toEqual('planets');
    });
  });

  describe('findVehicles', () => {
    it('should call callVehiclesEndpoint', async () => {
      const expectation = [{
        class: "wheeled",
        model: "Digger Crawler",
        name: "Sand Crawler",
        numPassengers: "30"
      }];

      APIcalls.callVehiclesEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findVehicles();

      expect(APIcalls.callVehiclesEndpoint).toHaveBeenCalled();
    });

    it('should set cards state and displayedCategory state', async () => {
      const expectation = [{
        class: "wheeled",
        model: "Digger Crawler",
        name: "Sand Crawler",
        numPassengers: "30"
      }];

      APIcalls.callVehiclesEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findVehicles();

      expect(app.instance().state.cards).toEqual(expectation);
      expect(app.instance().state.displayedCategory).toEqual('vehicles');
    });
  });

  describe('toggleFavorite', () => {
    beforeEach(() => {
      app.instance().setState({favorites: [{name: 'cam'}, {name: 'court'}]});
    });

    it('should remove a favorite if it already exists', () => {
      const expected = [{name: 'court'}];

      app.instance().toggleFavorite({name: 'cam'});

      expect(app.state().favorites).toEqual(expected);
    });

    it('should update the cards state if favorites is currently displayed', () => {
      const expected = [{ name: 'court' }];

      app.instance().setState({ displayedCategory: 'favorites' });
      app.instance().toggleFavorite({ name: 'cam' });

      expect(app.state().cards).toEqual(expected);
    });

    it('should add a card to favorites if it\'s not in already', () => {
      const expected = [{ name: 'cam' }, { name: 'court' }, { name: 'onyx' }];

      app.instance().toggleFavorite({ name: 'onyx' });

      expect(app.state().favorites).toEqual(expected);
    });
  });

  describe('displayFavorites', () => {
    it('should set the cards state equal to favorites and displayedCategory to favorites', () => {
      const expected = [{ name: 'cam' }, { name: 'court' }];
      app.setState({ favorites: expected })
      
      app.instance().displayFavorites();

      expect(app.state().cards).toEqual(expected);
      expect(app.state().displayedCategory).toEqual('favorites');
    });
  });
});
