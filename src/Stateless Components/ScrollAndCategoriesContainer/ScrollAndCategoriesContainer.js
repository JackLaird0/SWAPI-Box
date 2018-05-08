import React from 'react';
import Scroll from './../Scroll/Scroll';
import CategoryCardContainer from './../CategoryCardContainer/CategoryCardContainer';
import './ScrollAndCategoriesContainer.css'

const ScrollAndCategoriesContainer = () => {
  return (
    <div className="scroll-categories-container">
      <Scroll />
      <CategoryCardContainer />
    </div>
  )
}

export default ScrollAndCategoriesContainer