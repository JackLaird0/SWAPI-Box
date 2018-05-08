import React, { Component } from 'react';
import './App.css';
import TitleCategoriesContainer from './../../Stateless Components/TitleCategoriesContainer/TitleCategoriesContainer';
import ScrollAndCategoriesContainer from './../../Stateless Components/ScrollAndCategoriesContainer/ScrollAndCategoriesContainer'

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <TitleCategoriesContainer />
        <ScrollAndCategoriesContainer /> 
      </div>

    )}
}

export default App;
