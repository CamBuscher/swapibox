import { 
  getOpeningCrawl, 
  callPeopleEndpoint, 
  callPlanetsEndpoint, 
  callVehiclesEndpoint } from './APIcalls';

// describe('getOpeningCrawl', () => {

// });

describe('callPeopleEndpoint', () => {
  let makePeopleObjects;
  let arrayOfPeople;

  beforeEach(() => {
    makePeopleObjects = jest.fn();
    arrayOfPeople = ['luke'];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: arrayOfPeople
      })
    }));
  });

  it('should call fetch with correct paramaters', async () => {
    const expected = 'https://swapi.co/api/people'
    
    await callPeopleEndpoint()

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('delivers an array of people', async () => {
    const result = await callPeopleEndpoint()
    const expected = [{ homeworld: undefined, homeworldPop: undefined, species: undefined, name: undefined }]
    
    expect(result).toEqual(expected)
  })

  it('throws an error if the fetch call is rejected', async () => {
    window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

    const expected = Error('Something went wrong!')

    expect(callPeopleEndpoint()).rejects.toEqual(expected)
  })  
});

describe('')