import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import OpeningCrawl from './OpeningCrawl';

describe('OpeningCrawl', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      crawlInfo: {
        crawl: 'blah blah blah',
        release_date: 1234,
        title: 'hello world'
      },
      closeCrawl: jest.fn()
    };
    wrapper = mount(<OpeningCrawl {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call closeCrawl when button is pressed', () => {
    const exitButton = wrapper.find('section').find('button.stop-crawl');
    exitButton.simulate('click');
    
    expect(wrapper.prop('closeCrawl')).toHaveBeenCalled();
  });
});