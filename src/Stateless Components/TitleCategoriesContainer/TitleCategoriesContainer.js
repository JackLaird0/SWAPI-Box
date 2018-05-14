import React from 'react';
import './TitleCategoriesContainer.css'

const TitleCategoriesContainer = (props) => {

  return (
    <div className="title-categories-container">
      <h2 className="title">SWAPI-Box</h2>
      <div className="people category-button "
            onClick={props.selectPeople}>People</div>
      <div className="vehicle category-button" 
            onClick={props.selectVehicle}>Vehicles</div>
      <div className="planets category-button"
            onClick={props.selectPlanets}>Planets</div>
      <div className="favorites category-button"
            onClick={props.selectFavorites}>Favorites</div>
    </div>
  )
}

export default TitleCategoriesContainer