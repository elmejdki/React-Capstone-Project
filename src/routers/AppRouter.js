import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import MealPage from '../components/MealPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/meal/:id" exact component={MealPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
