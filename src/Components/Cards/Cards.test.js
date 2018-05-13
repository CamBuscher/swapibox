import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import PeopleCard from './PeopleCard';
import PlanetCard from './PlanetCard';
import VehicleCard from './VehicleCard';


describe('Card components', () => {
  describe('PeopleCard', () => {
    let wrapper;
    let mockProps;
    
    beforeEach(() => {
      mockProps = {
        person: {name: 'onyx'},
        toggleFavorite: jest.fn(),
        isFavorite: false
      }
      wrapper = mount(<PeopleCard {...mockProps}/>)
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have an icon with class of favorite if it is a favorite', () => {
      wrapper = shallow(<PeopleCard {...mockProps} isFavorite={true} />);

      const icon = wrapper.find('div').find('img')
      expect(icon.hasClass('favorite')).toBe(true);
    });

    it('should have an icon with class of notFavorite if it is not a favorite', () => {
      wrapper = shallow(<PeopleCard {...mockProps}/>);

      const icon = wrapper.find('div').find('img')
      expect(icon.hasClass('notFavorite')).toBe(true);
    });

    it('should call toggleFavorite with person as a param when icon is clicked', () => {
      const icon = wrapper.find('div').find('img');
      icon.simulate('click');

      expect(wrapper.prop('toggleFavorite')).toHaveBeenCalledWith({name: 'onyx'});
    });
  });

  describe('VehicleCard', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        vehicle: { name: 'prius' },
        toggleFavorite: jest.fn(),
        isFavorite: false
      };
      wrapper = mount(<VehicleCard {...mockProps} />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have an icon with class of favorite if it is a favorite', () => {
      wrapper = shallow(<VehicleCard {...mockProps} isFavorite={true} />);

      const icon = wrapper.find('div').find('img')
      expect(icon.hasClass('favorite')).toBe(true);
    });

    it('should have an icon with class of notFavorite if it is not a favorite', () => {
      wrapper = shallow(<VehicleCard {...mockProps} />);

      const icon = wrapper.find('div').find('img');
      expect(icon.hasClass('notFavorite')).toBe(true);
    });

    it('should call toggleFavorite with person as a param when icon is clicked', () => {
      const icon = wrapper.find('div').find('img');
      icon.simulate('click');

      expect(wrapper.prop('toggleFavorite')).toHaveBeenCalledWith({ name: 'prius' });
    });
  })
});