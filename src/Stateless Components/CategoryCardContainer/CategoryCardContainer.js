import React from 'react';
import CategoryCard from './../CategoryCard/CategoryCard'
import './CategoryCardContainer.css'
import PropTypes from 'prop-types'

const CategoryCardContainer = (props) => {

  const categoryCards = () => {
   if (props.selectedCategory === 'vehicles') {
    return props.vehicleData.map((vehicle, index) => {
      const {name, model, vehicle_class, passengers} = vehicle;
      return (<CategoryCard
                    key={index}
                    name={name}
                    model={model}
                    vehicle-class={vehicle_class}
                    passengers={passengers}
                    selectedCategory={props.selectedCategory}
                    saveFavorite={props.saveFavorite}
                    favoriteData={vehicle}
                    />)
      })
    } else if (props.selectedCategory === 'planets') {
      return props.planetData.map((planet, index) => {
        const residents = planet.splice(0, planet.length - 1)
        const {name, climate, terrain, population} = planet[planet.length - 1]
        return (<CategoryCard   
                      key={index}
                      name={name}
                      population={population}
                      residents={residents}
                      terrain={terrain}
                      climate={climate}
                      selectedCategory={props.selectedCategory}
                      saveFavorite={props.saveFavorite}
                      />)
      })
    } else if (props.selectedCategory === 'people') {
      return props.peopleData.map((people, index) => {
        const {name, planet, population, species} = people
        return (<CategoryCard 
                      key={index}
                      name={name}
                      planet={planet}
                      population={population}
                      species={species}
                      selectedCategory={props.selectedCategory}
                      saveFavorite={props.saveFavorite}
                      />)
      })
    } else {
      return <CategoryCard />
    }
  }

  return (
    <div className="category-card-container">
      {categoryCards()}
    </div>
  )
}

CategoryCardContainer.propTypes = {
  selectedCategory: PropTypes.string,
  name: PropTypes.string,
  saveFavorite: PropTypes.func,
  model: PropTypes.string,
  class: PropTypes.string,
  passengers: PropTypes.number,
  residents: PropTypes.array,
  population: PropTypes.number,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  species: PropTypes.string,
  planet: PropTypes.string
}

export default CategoryCardContainer;