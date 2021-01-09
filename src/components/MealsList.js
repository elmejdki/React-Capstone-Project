import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { startSetMeals } from '../actions/meals';
import { filterMeals } from '../helpers';
import MealListItem from './MealListItem';
import './MealList.css';

export const MealsList = ({ meals, startSetMeals }) => {
  const [isLoading, setIsLoading] = useState(meals.length === 0);

  useEffect(() => {
    if (meals.length === 0) {
      setIsLoading(true);
      startSetMeals()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          // console.log(err); // TODO: handle errors with an error component
        });
    }
  }, []);

  return (
    <div className="content-container">
      {
        isLoading
          ? <Loader />
          : (
            <div className="meals">
              {
                meals.map(meal => (
                  <MealListItem
                    key={meal.id}
                    meal={meal}
                  />
                ))
              }
              {
                (meals.length + 1) % 3 === 0
                && (<div className="meal hidden" />)
              }
            </div>
          )
      }
    </div>
  );
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  startSetMeals: PropTypes.func.isRequired,
};

const mapStateToProps = ({ meals, filters }) => ({
  meals: filterMeals(meals, filters),
});

const mapDispatchToProps = { startSetMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
