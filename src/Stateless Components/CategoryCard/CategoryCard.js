import React from 'react';
import './CategoryCard.css'

const CategoryCard = (props) => {
  if (props.selectedCategory === 'vehicles') {
  return (
    <div className="category-card">
      <h4>Name: {props.name}</h4>
      <button className="favorite"
              onClick={() => props.saveFavorite(props)}>Star</button>
      <h4>Model: {props.model}</h4>
      <h4>Class: {props['vehicle-class']}</h4>
      <h4>Passengers: {props.passengers}</h4>
    </div>
  )
  } else if (props.selectedCategory === 'planets') {
    const residents = props.residents.map(person => {
      return  <p> {person} </p>
    })
   
    return (
      <div className="category-card">
        <h4>Name: {props.name}</h4>
        <button className="favorite"
                onClick={() => props.saveFavorite(props)}>Star</button>
        <h4>Population: {props.population}</h4>
        <div className="residents">Residents: {residents}</div>
        <h4>Terrain: {props.terrain}</h4>
        <h4>Climate: {props.climate}</h4>
      </div>
    )
  } else if (props.selectedCategory === 'people') {
    return (
      <div className="category-card">
        <h4>Name: {props.name}</h4>
        <button className="favorite"
                onClick={() => props.saveFavorite(props)}>Star</button>
        <h4>Species: {props.species}</h4>
        <h4>Home Planet: {props.planet}</h4>
        <h4>Population: {props.population}</h4>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Select a Category!</h2>
      </div>
    )
  }
}

export default CategoryCard;