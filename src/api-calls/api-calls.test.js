import {vehicleData, peopleData, planetData, filmData} from './api-calls'

describe('Get film data', () => {
  let FilmDataHandler 
  let crawlData

  beforeEach(() => {
    FilmDataHandler = jest.fn()
    crawlData =  {data: [{
      "title": "A New Hope", 
      "episode_id": 4, 
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
      "director": "George Lucas", 
      "producer": "Gary Kurtz, Rick McCallum", 
      "release_date": "1977-05-25", 
      "characters": [
          "https://swapi.co/api/people/1/", 
          "https://swapi.co/api/people/2/", 
          "https://swapi.co/api/people/3/", 
          "https://swapi.co/api/people/4/", 
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/6/", 
          "https://swapi.co/api/people/7/", 
          "https://swapi.co/api/people/8/", 
          "https://swapi.co/api/people/9/", 
          "https://swapi.co/api/people/10/", 
          "https://swapi.co/api/people/12/", 
          "https://swapi.co/api/people/13/", 
          "https://swapi.co/api/people/14/", 
          "https://swapi.co/api/people/15/", 
          "https://swapi.co/api/people/16/", 
          "https://swapi.co/api/people/18/", 
          "https://swapi.co/api/people/19/", 
          "https://swapi.co/api/people/81/"
      ], 
      "planets": [
          "https://swapi.co/api/planets/2/", 
          "https://swapi.co/api/planets/3/", 
          "https://swapi.co/api/planets/1/"
      ], 
      "starships": [
          "https://swapi.co/api/starships/2/", 
          "https://swapi.co/api/starships/3/", 
          "https://swapi.co/api/starships/5/", 
          "https://swapi.co/api/starships/9/", 
          "https://swapi.co/api/starships/10/", 
          "https://swapi.co/api/starships/11/", 
          "https://swapi.co/api/starships/12/", 
          "https://swapi.co/api/starships/13/"
      ], 
      "vehicles": [
          "https://swapi.co/api/vehicles/4/", 
          "https://swapi.co/api/vehicles/6/", 
          "https://swapi.co/api/vehicles/7/", 
          "https://swapi.co/api/vehicles/8/"
      ], 
      "species": [
          "https://swapi.co/api/species/5/", 
          "https://swapi.co/api/species/3/", 
          "https://swapi.co/api/species/2/", 
          "https://swapi.co/api/species/1/", 
          "https://swapi.co/api/species/4/"
      ], 
      "created": "2014-12-10T14:23:31.880000Z", 
      "edited": "2015-04-11T09:46:52.774897Z", 
      "url": "https://swapi.co/api/films/1/"
    }]
  }
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      results: crawlData.data
      })
    }))
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/films/'

    await filmData()

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('Should return the correct data', async () => {
    const result = await filmData()
    const expected = crawlData.data

    expect(result).toEqual(expected)
  })
})


describe('Get peopleData', () => {
  let peopleDataHandler
  let mockPeopleData

  beforeEach(() => {
    peopleDataHandler = jest.fn()
    mockPeopleData = [
      {
          "name": "Luke Skywalker", 
          "height": "172", 
          "mass": "77", 
          "hair_color": "blond", 
          "skin_color": "fair", 
          "eye_color": "blue", 
          "birth_year": "19BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.co/api/planets/1/", 
          "films": [
              "https://swapi.co/api/films/2/", 
              "https://swapi.co/api/films/6/", 
              "https://swapi.co/api/films/3/", 
              "https://swapi.co/api/films/1/", 
              "https://swapi.co/api/films/7/"
          ], 
          "species": [
              "https://swapi.co/api/species/1/"
          ], 
          "vehicles": [
              "https://swapi.co/api/vehicles/14/", 
              "https://swapi.co/api/vehicles/30/"
          ], 
          "starships": [
              "https://swapi.co/api/starships/12/", 
              "https://swapi.co/api/starships/22/"
          ], 
          "created": "2014-12-09T13:50:51.644000Z", 
          "edited": "2014-12-20T21:17:56.891000Z", 
          "url": "https://swapi.co/api/people/1/"
      }]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          results: mockPeopleData
          })
        }))
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/people/'

    await peopleData()

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('Should return the correct data', async () => {
    const result = await filmData()
    const expected = mockPeopleData

    expect(result).toEqual(expected)
  })
})

describe('Get planet data', () => {
  let mockPlanetData
  let planetDataHandler

  beforeEach(() => {
    planetDataHandler = jest.fn()
    mockPlanetData = [
      {
          "name": "Alderaan", 
          "rotation_period": "24", 
          "orbital_period": "364", 
          "diameter": "12500", 
          "climate": "temperate", 
          "gravity": "1 standard", 
          "terrain": "grasslands, mountains", 
          "surface_water": "40", 
          "population": "2000000000", 
          "residents": [
              "https://swapi.co/api/people/5/", 
              "https://swapi.co/api/people/68/", 
              "https://swapi.co/api/people/81/"
          ], 
          "films": [
              "https://swapi.co/api/films/6/", 
              "https://swapi.co/api/films/1/"
          ], 
          "created": "2014-12-10T11:35:48.479000Z", 
          "edited": "2014-12-20T20:58:18.420000Z", 
          "url": "https://swapi.co/api/planets/2/"
      }
    ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          results: mockPlanetData
          })
        }))
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/planets/'

    await planetData()

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('Should return the correct data', async () => {
    const result = await planetData()
    const expected = [[
       undefined,
       undefined,
       undefined,
       { "climate": "temperate",
         "created": "2014-12-10T11:35:48.479000Z",
         "diameter": "12500",
         "edited": "2014-12-20T20:58:18.420000Z",
         "films":[
           "https://swapi.co/api/films/6/",
           "https://swapi.co/api/films/1/",
         ],
         "gravity": "1 standard",
         "name": "Alderaan",
         "orbital_period": "364",
         "population": "2000000000",
         "residents": [
           "https://swapi.co/api/people/5/",
           "https://swapi.co/api/people/68/",
           "https://swapi.co/api/people/81/",
         ],
         "rotation_period": "24",
         "surface_water": "40",
         "terrain": "grasslands, mountains",
         "url": "https://swapi.co/api/planets/2/",
       }
     ]]

    expect(result).toEqual(expected)
  })
})

describe('Get vehicle data', () => {
  let mockVehicleData
  let vehicleDataHandler

  beforeEach(() => {
    vehicleDataHandler = jest.fn()
    mockVehicleData =  [
      {
          "name": "Sand Crawler", 
          "model": "Digger Crawler", 
          "manufacturer": "Corellia Mining Corporation", 
          "cost_in_credits": "150000", 
          "length": "36.8", 
          "max_atmosphering_speed": "30", 
          "crew": "46", 
          "passengers": "30", 
          "cargo_capacity": "50000", 
          "consumables": "2 months", 
          "vehicle_class": "wheeled", 
          "pilots": [], 
          "films": [
              "https://swapi.co/api/films/5/", 
              "https://swapi.co/api/films/1/"
          ], 
          "created": "2014-12-10T15:36:25.724000Z", 
          "edited": "2014-12-22T18:21:15.523587Z", 
          "url": "https://swapi.co/api/vehicles/4/"
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: mockVehicleData
        })
      }))
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/vehicles/'

    await vehicleData()

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('Should return the correct data', async () => {
    const result = await vehicleData()
    const expected = mockVehicleData

    expect(result).toEqual(expected)
  })
})
