import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { startSetMeals } from '../actions/meals';
import { filterMeals } from '../helpers';

const MealsList = ({ meals, startSetMeals }) => {
  const [isLoading, setIsLoading] = useState(meals.length === 0);

  useEffect(() => {
    setIsLoading(true);
    startSetMeals().then(() => {
      setIsLoading(false);
    }).catch(err => {
      console.log(err); // TODO: handle errors with an error component
    });
  }, []);

  return (
    <div>
      {
        isLoading
          ? <Loader />
          : (
            <div>
              <ul>
                {
                  meals.map(meal => (
                    <li key={meal.id}>
                      <Link to={`/meal/${meal.id}`}>
                        {meal.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
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
