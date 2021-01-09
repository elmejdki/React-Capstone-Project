import React from 'react';
import ConnectedMealsListFilter from './MealsListFilter';
import ConnectedMealsList from './MealsList';

const HomePage = () => (
  <div className="page-container">
    <ConnectedMealsListFilter />
    <ConnectedMealsList />
  </div>
);

export default HomePage;
