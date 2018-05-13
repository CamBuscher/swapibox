import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage', () => {
  let wrapper;
  let mockProps

  beforeEach(() => {
    mockProps = {
      favorites: [{ name: 'cam' }],
      displayFavorites: jest.fn(),
      findPeople: jest.fn(),
      findPlanets: jest.fn(),
      findVehicles: jest.fn(),
      cards: [],
      toggleFavorite: jest.fn(),
      displayedCategory: null
    };
    wrapper = mount(<MainPage {...mockProps} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});