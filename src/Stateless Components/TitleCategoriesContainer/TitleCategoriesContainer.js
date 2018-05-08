import React from 'react';
import './TitleCategoriesContainer.css'

const TitleCategoriesContainer = (props) => {

  return (
    <div className="title-categories-container">
      <h2 className="title">SWAPI-Box</h2>
      <div className="people category-button ">People</div>
      <div className="vehicle category-button">Vehicles</div>
      <div className="planets category-button">Planets</div>
    </div>
  )
}

export default TitleCategoriesContainer