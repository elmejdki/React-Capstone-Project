import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import mealsReducer from '../reducers/meals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      meals: mealsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
