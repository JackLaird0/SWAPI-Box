import React from 'react';
import Scroll from './../Scroll/Scroll';
import CategoryCardContainer from './../CategoryCardContainer/CategoryCardContainer';
import './ScrollAndCategoriesContainer.css'

const ScrollAndCategoriesContainer = (props) => {
  console.log(props.selectedCategory)
  return (
    <div className="scroll-categories-container">
      <Scroll openingCrawl={props.openingCrawl}/>
      <CategoryCardContainer  vehicleData={props.vehicleData} 
                              planetData={props.planetData} 
                              peopleData={props.peopleData}
                              openingCrawl={props.openingCrawl} 
                              selectedCategory={props.selectedCategory}
                              saveFavorite={props.saveFavorite}/>
    </div>
  )
}

export default ScrollAndCategoriesContainer 