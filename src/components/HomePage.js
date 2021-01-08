import React from 'react';
import MealsListFilter from './MealsListFilter';
import MealsList from './MealsList';

const HomePage = () => (
  <div className="page-container">
    <MealsListFilter />
    <MealsList />
  </div>
);

export default HomePage;
