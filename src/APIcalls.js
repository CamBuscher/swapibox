import FilmsDataHandler from "./Helpers/FilmsDataHandler";

// Opening Crawl
const getOpeningCrawl = async () => {
  try { 
    const response = await fetch('https://swapi.co/api/films/');
    const data = await response.json();
    const allCrawlData = await new FilmsDataHandler(data);
    return allCrawlData.data[Math.floor(Math.random() * allCrawlData.data.length)];
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

// People API endpoint
const callPeopleEndpoint = async () => {
  try {
    const response = await fetch('https://swapi.co/api/people');
    const peopleData = await response.json();
    const arrayOfPeople = await makePeopleObjects(peopleData.results);

    return arrayOfPeople;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const makePeopleObjects = async (peopleArray) => {
  try {
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
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const fetchSpecies = async (speciesEndpoint) => {
  try { 
    const speciesResponse = await fetch(speciesEndpoint);
    const species = await speciesResponse.json();
    return species.name;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const fetchHomeworldData = async (homeworldEndpoint) => {
  try {
    const homeworldResponse = await fetch(homeworldEndpoint);
    const homeworld = await homeworldResponse.json();
    return {
      homeworld: homeworld.name,
      homeworldPop: homeworld.population
    }; 
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

// Planets API endpoint 

const callPlanetsEndpoint = async () => {
  try {
    const response = await fetch('https://swapi.co/api/planets');
    const planetsData = await response.json();
    const arrayOfPlanets = await makePlanetsObjects(planetsData.results);

    return arrayOfPlanets;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const makePlanetsObjects = async planetsArray => {
  try {
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
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const fetchResidents = async residentsEndpointsArray => {
  try {
    const residents = residentsEndpointsArray.map(async endpoint => {
      const response = await fetch(endpoint);
      const resident = await response.json();
      return resident.name;
    });

    return Promise.all(residents);
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

// Vehicles API endpoint 

const callVehiclesEndpoint = async () => {
  try {
    const response = await fetch('https://swapi.co/api/vehicles');
    const vehiclesData = await response.json();
    const arrayOfVehicles = await makeVehiclesObjects(vehiclesData.results);

    return arrayOfVehicles;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const makeVehiclesObjects = async vehiclesArray => {
  try {
    const vehicles = vehiclesArray.map(async vehicle => {
      return { 
        name: vehicle.name, 
        model: vehicle.model, 
        class: vehicle.vehicle_class,
        numPassengers: vehicle.passengers
      };
    });

    return Promise.all(vehicles);
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

export {
  getOpeningCrawl,
  callPeopleEndpoint,
  callPlanetsEndpoint,
  callVehiclesEndpoint
};