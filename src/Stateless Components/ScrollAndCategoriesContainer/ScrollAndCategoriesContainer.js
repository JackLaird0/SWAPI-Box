import React from 'react';
import Scroll from './../Scroll/Scroll';
import CategoryCardContainer from './../CategoryCardContainer/CategoryCardContainer';
import './ScrollAndCategoriesContainer.css';
import PropTypes from 'prop-types'

const ScrollAndCategoriesContainer = (props) => {
  console.log(props.selectedCategory)
  return (
    <div className="scroll-categories-container">
      <Scroll openingCrawl={props.openingCrawl}/>
      <CategoryCardContainer  vehicleData={props.vehicleData} 
                              planetData={props.planetData} 
                              peopleData={props.peopleData}
                              selectedCategory={props.selectedCategory}
                              saveFavorite={props.saveFavorite}/>
    </div>
  )
}

ScrollAndCategoriesContainer.proptypes = {
  openingCrawl: PropTypes.array.isRequired,
  vehicleData: PropTypes.array.isRequired,
  planetData: PropTypes.array.isRequired,
  peopleData: PropTypes.array.isRequired,
  saveFavorite: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
}

export default ScrollAndCategoriesContainer 