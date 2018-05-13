import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardDisplay from './CardDisplay';

describe('CardDisplay', () => {
  let wrapper;
  let mockProps = {
    cards: [{ name: 'cam' }],
    toggleFavorite: jest.fn(),
    favorites: [{ name: 'cam' }]
  }

  beforeEach(() => {
    wrapper = mount(<CardDisplay {...mockProps}/>);
    mockProps = {
      cards: [],
      toggleFavorite: jest.fn(),
      favorites: [{ name: 'cam' }]
    };
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a peopleCard if given correct prop', () => {
    wrapper = mount(<CardDisplay 
      {...mockProps} 
      cards={[{name: 'Cam', homeworld: 'Earth' }]}
    />);
    
    const card = wrapper.find('div').find('div.card')
    expect(card.hasClass('peopleCard')).toBe(true);
  });

  it('should render a vehicleCard if given correct prop', () => {
    wrapper = mount(<CardDisplay
      {...mockProps}
      cards={[{ name: 'Car', class: 'economy' }]}
    />);

    const card = wrapper.find('div').find('div.card')
    expect(card.hasClass('vehiclesCard')).toBe(true)
  });

  it('should render a planetCard if given correct prop', () => {
    wrapper = mount(<CardDisplay
      {...mockProps}
      cards={[{ name: 'Car', residents: ['spock'] }]}
    />);

    const card = wrapper.find('div').find('div.card');
    expect(card.hasClass('planetsCard')).toBe(true);
  });

  it('should render a message if no cards given', () => {
    wrapper = mount(<CardDisplay
      {...mockProps}
      cards={[]}
    />);

    const message = wrapper.find('div').find('h3');
    expect(message).toHaveLength(1);
  });
});