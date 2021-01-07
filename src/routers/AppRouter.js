import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import MealPage from '../components/MealPage';

const AppRouter = () => (
  <Router>
    {/*
      TODO: Add a Header component later
     */}
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/meal/:id" exact component={MealPage} />
    </Switch>
  </Router>
);

export default AppRouter;
