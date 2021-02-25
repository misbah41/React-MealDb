

import React, { useState, useEffect } from "react";
import './meal.css';


export default function MealApp() {

  const [search, setSearch] = useState("");
  const [getMeal, setGeatMeal] = useState([]);

  //Api URL constant
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search} `;

  const getRecipes = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setGeatMeal(data.meals))
      .catch(error => alert('Something Went Wrong Please Try Again'))
  }

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = e => setSearch(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getRecipes();
  };
  


  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form onSubmit={onSubmit} className="search-form d-flex justify-content-around">
            <input
              className="form-control"
              type="text"
              name="search"
              onChange={onChange}
              value={search}
              autoComplete="off"
              placeholder="Search Food"
            />
            <input className=" searchBtn btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    
      <div className="row">
        {
          getMeal.map(result => <div className="col-sm-6 col-md-4">
            <div className="mealDeatailsCard">
              <MealCard strMealThumb={result.strMealThumb} strArea={result.strArea} strCategory={result.strCategory} />
            </div>
          </div>)
        }
      </div>
    </>
  )
}

//Meal card Function component
const MealCard = props => {
  return (
    <>
      <img src={props.strMealThumb} alt="Imag Not foumd" />
      <h3>{props.strArea}</h3>
      <small>{props.strCategory}</small>
      <button className="btn btn-primary d-block">Show Details</button>
    </>
  )
}

//anothe component




