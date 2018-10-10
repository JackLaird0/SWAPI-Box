export const vehicleData = async () => {
  const vehicleUrl = 'https://swapi.co/api/vehicles/'
  const response = await fetch(vehicleUrl)
  const vehicles = await response.json()
  return vehicles.results
}

export const peopleData = async () => {
  const peopleUrl = 'https://swapi.co/api/people/'
  const response = await fetch(peopleUrl)
  const people = await response.json()
  const peopleData = await people.results.map(async person => {
    const homePlanet = await fetchPersonHomeWorld(person.homeworld)
    const species = await fetchPersonSpecies(person.species)
    return {name: person.name,
            ...homePlanet,
          species,
            type: 'people'
            }
  })
  return Promise.all(peopleData)
}

const fetchPersonHomeWorld = async url => {
  const response = await fetch(url)
  const planet = await response.json()
  return{planet: planet.name, population: planet.population}
}

const fetchPersonSpecies = async url => {
  const response = await fetch(url)
  const species = await response.json()
  return species.name
}

export const planetData = async () => {
  const planetUrl = 'https://swapi.co/api/planets/'
  const response = await fetch(planetUrl)
  const planets = await response.json()
  const planetData = await fetchPlanetResidents(planets.results)
  return planetData
}

const fetchPlanetResidents = (planets) => {
  const unresolvedPromises = planets.map( planet => {
    const planetResidents = planet.residents.map(async resident => {
      const response = await fetch(resident)
      const person = await response.json()
      return person.name
    })
  return Promise.all([...planetResidents, planet])
  })
  return Promise.all(unresolvedPromises)
}

export const filmData = async () => {
  const filmUrl = 'https://swapi.co/api/films/'
  const response = await fetch(filmUrl)
  const films = await response.json()
  return films.results
}