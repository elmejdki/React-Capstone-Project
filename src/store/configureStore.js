import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from '../reducers/categories';
import mealsReducer from '../reducers/meals';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      meals: mealsReducer,
      categories: categoriesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
