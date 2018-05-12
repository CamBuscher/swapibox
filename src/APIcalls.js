import FilmsDataHandler from "./Helpers/FilmsDataHandler";

// Opening Crawl
const getOpeningCrawl = async () => {
  const response = await fetch('https://swapi.co/api/films/');
  const data = await response.json();
  const allCrawlData = await new FilmsDataHandler(data);
  return allCrawlData.data[Math.floor(Math.random() * allCrawlData.data.length)];
};

// People API endpoint
const callPeopleEndpoint = async () => {
  const response = await fetch('https://swapi.co/api/people');
  const peopleData = await response.json();
  const arrayOfPeople = await makePeopleObjects(peopleData.results);

  return arrayOfPeople;
};

const makePeopleObjects = async (peopleArray) => {
  const people = peopleArray.map(async person => {
    const species = await fetchSpecies(person.species);
    const homeworld = await fetchHomeworldData(person.homeworld);
    return {
      ...homeworld,
      species,
      name: person.name
    };
  });

  return Promise.all(people);
};

const fetchSpecies = async (speciesEndpoint) => {
  const speciesResponse = await fetch(speciesEndpoint);
  const species = await speciesResponse.json();
  return species.name;
};

const fetchHomeworldData = async (homeworldEndpoint) => {
  const homeworldResponse = await fetch(homeworldEndpoint);
  const homeworld = await homeworldResponse.json();
  return {
    homeworld: homeworld.name,
    homeworldPop: homeworld.population
  };
};

// Planets API endpoint 

const callPlanetsEndpoint = async () => {
  const response = await fetch('https://swapi.co/api/planets');
  const planetsData = await response.json();
  const arrayOfPlanets = await makePlanetsObjects(planetsData.results);

  return arrayOfPlanets;
};

const makePlanetsObjects = async planetsArray => {
  const planets = planetsArray.map(async planet => {
    const residents = await fetchResidents(planet.residents);
    return {
      terrain: planet.terrain,
      population: planet.population,
      name: planet.name,
      climate: planet.climate,
      residents
    };
  });

  return Promise.all(planets);
};

const fetchResidents = async residentsEndpointsArray => {
  const residents = residentsEndpointsArray.map(async endpoint => {
    const response = await fetch(endpoint);
    const resident = await response.json();
    return resident.name;
  });

  return Promise.all(residents);
};

// Vehicles API endpoint 

const callVehiclesEndpoint = async () => {
  const response = await fetch('https://swapi.co/api/vehicles');
  const vehiclesData = await response.json();
  const arrayOfVehicles = await makeVehiclesObjects(vehiclesData.results);

  return arrayOfVehicles;
};

const makeVehiclesObjects = async vehiclesArray => {
  const vehicles = vehiclesArray.map(async vehicle => {
    return { 
      name: vehicle.name, 
      model: vehicle.model, 
      class: vehicle.vehicle_class,
      numPassengers: vehicle.passengers
    };
  });

  return Promise.all(vehicles);
};

export {
  getOpeningCrawl,
  callPeopleEndpoint,
  callPlanetsEndpoint,
  callVehiclesEndpoint
};