import React, { Component } from 'react';
import './App.css';
import TitleCategoriesContainer from './../../Stateless Components/TitleCategoriesContainer/TitleCategoriesContainer';
import ScrollAndCategoriesContainer from './../../Stateless Components/ScrollAndCategoriesContainer/ScrollAndCategoriesContainer';
import {vehicleData, peopleData, planetData, filmData} from './../../api-calls/api-calls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      openingCrawl: [],
      planets: [],
      people: [],
      selectedCategory: '',
      favorites: []
    }

    this.handleVehicleSelect = this.handleVehicleSelect.bind(this);
    this.handlePeopleSelect = this.handlePeopleSelect.bind(this);
    this.handlePlanetSelect = this.handlePlanetSelect.bind(this);
    this.handleFavoritesSelect = this.handleFavoritesSelect.bind(this);
    this.saveFavorites = this.saveFavorites.bind(this)
  }

  async handleVehicleSelect() {  
    this.setState({selectedCategory: 'vehicles'} ) 
    if(!this.state.vehicles.length) {
      const vehicles = await vehicleData()
      this.setState({ vehicles})
    }
  }

  handleFavoritesSelect() {
    this.setState({ selectedCategory: 'favorites' })
  }

  async handlePeopleSelect() {
    this.setState({selectedCategory: 'people'})
    if(!this.state.people.length) {
      const people = await peopleData()
      this.setState({ people })
    }
  }

  async handlePlanetSelect() {
    this.setState({selectedCategory: 'planets'} )
    if(!this.state.planets.length){
      const planets = await planetData()
      this.setState({ planets })
    }
  }

  saveFavorites(data) {
    const favoritesData = this.state.favorites.slice()
    favoritesData.push(data)
    this.setState({favorites: favoritesData})
  }

  async componentDidMount() {
    const openingCrawl = await filmData()
    this.setState({ openingCrawl })
  }

  render() {
    return (
      <div className="app-component">
        <TitleCategoriesContainer selectVehicle={this.handleVehicleSelect} 
                                  selectPeople={this.handlePeopleSelect} 
                                  selectPlanets={this.handlePlanetSelect} 
                                  selectFavorites={this.handleFavoritesSelect}
                                  />
        <ScrollAndCategoriesContainer vehicleData={this.state.vehicles}
                                      planetData={this.state.planets} 
                                      peopleData={this.state.people}
                                      openingCrawl={this.state.openingCrawl} 
                                      selectedCategory={this.state.selectedCategory}
                                      saveFavorite={this.saveFavorites}
                                      /> 
      </div>

    )}
}

export default App;
