import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { startSetMeals } from './actions/meals';

const store = configureStore();

store.dispatch(startSetMeals()).then(done => {
  console.log(done);
}).catch(error => {
  console.log(error);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
