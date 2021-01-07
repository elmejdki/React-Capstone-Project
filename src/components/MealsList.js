import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { startSetMeals } from '../actions/meals';
import Loader from './Loader';

const MealsList = ({ meals, startSetMeals }) => {
  const [isLoading, setIsLoading] = useState(meals.length === 0);
  const [localMeals, setLocalMeals] = useState([]);
  const [lastMealIndex, setLastMealIndex] = useState(0);
  const [noMoreMeals, setNoMoreMeals] = useState(false);

  const addTenMeals = meals => {
    let index = 0;
    const newMeals = [];
    const newLastIndex = lastMealIndex + 1;

    while (index < 10 && meals[newLastIndex + index]) {
      newMeals.push(meals[newLastIndex + index]);
      index += 1;
    }

    setLocalMeals(prevMeals => [
      ...prevMeals,
      ...newMeals,
    ]);

    setLastMealIndex(prevState => prevState + index);

    if (!meals[newLastIndex + index + 1]) {
      setNoMoreMeals(true);
    }
  };

  useEffect(() => {
    if (meals.length === 0) {
      setIsLoading(true);
      startSetMeals().then(meals => {
        setIsLoading(false);
        addTenMeals(meals);
      }).catch(err => {
        console.log(err); // TODO: handle errors with an error component
      });
    } else {
      addTenMeals(meals);
    }
  }, []);

  const handleDisplayMore = () => {
    addTenMeals(meals);
  };

  return (
    <div>
      {
        isLoading
          ? <Loader />
          : (
            <ul>
              {
                localMeals.map(meal => (
                  <li key={meal.id}>
                    <Link to={`/meal/${meal.id}`}>
                      {meal.title}
                    </Link>
                  </li>
                ))
              }
              {
                !noMoreMeals && (
                  <button
                    type="button"
                    onClick={handleDisplayMore}
                  >
                    Load More
                  </button>
                )
              }
            </ul>
          )
      }
    </div>
  );
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  startSetMeals: PropTypes.func.isRequired,
};

const mapStateToProps = ({ meals }) => ({
  meals,
});

const mapDispatchToProps = { startSetMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
