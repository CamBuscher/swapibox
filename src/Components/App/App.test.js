import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
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

    expect(app.instance().state).toEqual(expected)
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
      }

      APIcalls.getOpeningCrawl = jest.fn().mockReturnValue(expectation);
      await app.instance().getCrawl();

      expect(app.instance().state.loading).toEqual(false)
      expect(app.instance().state.openingCrawlData).toEqual(expectation)
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
      }]
      APIcalls.callPeopleEndpoint = jest.fn().mockReturnValue(expectation)

      app.instance().findPeople()
      expect(APIcalls.callPeopleEndpoint).toHaveBeenCalled()
    });

    it('should set set cards state and displayedCategory state', async () => {
      const expectation = [{
        homeworld: "Tatooine",
        homeworldPop: "200000",
        name: "Luke Skywalker",
        species: "Human"
      }]
      APIcalls.callPeopleEndpoint = jest.fn().mockReturnValue(expectation);

      await app.instance().findPeople();
      
      expect(app.instance().state.displayedCategory).toEqual('people');
      expect(app.instance().state.cards).toEqual(expectation);
    })
  });
});
