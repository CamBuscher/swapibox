import { 
  getOpeningCrawl, 
  callPeopleEndpoint, 
  callPlanetsEndpoint, 
  callVehiclesEndpoint } from './APIcalls';

describe('getOpeningCrawl', () => {
  let FilmsDataHandler;
  let allCrawlData;

  beforeEach(() => {
    FilmsDataHandler = jest.fn();
    allCrawlData = {data: [{
      crawl: "It is a period of civil war. Rebel spaceships, striking from a hidden ...",
      release_date: "1977-05-25",
      title: "A New Hope"
    }]};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: allCrawlData.data
      })
    }));
  });

  it('should call fetch with correct paramaters', async () => {
    const expected = 'https://swapi.co/api/films/';

    await getOpeningCrawl();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('delivers a singular object of filmData', async () => {
    const result = await getOpeningCrawl();
    const expected = { title: 'A New Hope', release_date: '1977-05-25', crawl: undefined };

    expect(result).toEqual(expected);
  });

  it('throws an error if the fetch call is rejected', async () => {
    window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })));

    const expected = Error('Something went wrong!');

    expect(getOpeningCrawl()).rejects.toEqual(expected);
  });
});

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
    const expected = 'https://swapi.co/api/people';
    
    await callPeopleEndpoint();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('delivers an array of people', async () => {
    const result = await callPeopleEndpoint();
    const expected = [{ homeworld: undefined, homeworldPop: undefined, species: undefined, name: undefined }];
    
    expect(result).toEqual(expected);
  })

  it('throws an error if the fetch call is rejected', async () => {
    window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })));

    const expected = Error('Something went wrong!');

    expect(callPeopleEndpoint()).rejects.toEqual(expected);
  });
});

describe('callPlanetsEndpoint', () => {
  let makePlanetsObjects;
  let arrayOfPlanets;

  beforeEach(() => {
    makePlanetsObjects = jest.fn();
    arrayOfPlanets = [{
      climate: "temperate, tropical",
      name: "Yavin IV",
      population: "1000",
      residents: [],
      terrain: "jungle, rainforests"
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: arrayOfPlanets
      })
    }));
  });

  it('should call fetch with correct paramaters', async () => {
    const expected = 'https://swapi.co/api/planets';

    await callPlanetsEndpoint();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('delivers an array of planets', async () => {
    const result = await callPlanetsEndpoint();
    const expected = arrayOfPlanets;

    expect(result).toEqual(expected);
  })

  it('throws an error if the fetch call is rejected', async () => {
    window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })));

    const expected = Error('Something went wrong!');

    expect(callPlanetsEndpoint()).rejects.toEqual(expected);
  });
});

describe('callVehiclesEndpoint', () => {
  let makeVehiclesObjects;
  let arrayOfVehicles;

  beforeEach(() => {
    makeVehiclesObjects = jest.fn();
    arrayOfVehicles = [{
      vehicle_class: "repulsorcraft",
      model: "T-16 skyhopper",
      name: "T-16 skyhopper",
      passengers: "1"
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: arrayOfVehicles
      })
    }));
  });

  it('should call fetch with correct paramaters', async () => {
    const expected = 'https://swapi.co/api/vehicles';

    await callVehiclesEndpoint();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('delivers an array of Vehicles', async () => {
    const result = await callVehiclesEndpoint();
    const expected = [{
      name: 'T-16 skyhopper',
      model: 'T-16 skyhopper',
      class: 'repulsorcraft',
      numPassengers: '1'
    }];
    expect(result).toEqual(expected);
  });

  it('throws an error if the fetch call is rejected', async () => {
    window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })));

    const expected = Error('Something went wrong!');

    expect(callVehiclesEndpoint()).rejects.toEqual(expected);
  });
});