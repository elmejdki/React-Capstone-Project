import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetMealDetails, emptyMealDetails } from '../actions/mealDetails';

const MealPage = ({ match, startSetMealDetails, mealDetails }) => {
  useEffect(() => {
    startSetMealDetails(match.params.id);

    return () => {
      emptyMealDetails();
    };
  }, []);

  return (
    <div className="content-container">
      <h1>
        {mealDetails.title}
      </h1>
      <p>
        {`${mealDetails.area} Food.`}
      </p>
      {
        mealDetails.youtubeVideo
        && (
          <iframe
            title={mealDetails.title}
            width="560"
            height="315"
            src={mealDetails.youtubeVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      }
      <img
        src={mealDetails.image}
        alt={`${mealDetails.title} thumbnail`}
      />
      <ul>
        {
          mealDetails.ingredients.map(item => (<li key={item}>{item}</li>))
        }
      </ul>
      <p>
        {mealDetails.instructions}
      </p>
    </div>
  );
};

MealPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  startSetMealDetails: PropTypes.func.isRequired,
  mealDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ mealDetails }) => ({
  mealDetails,
});

const mapDispatchToProps = { startSetMealDetails, emptyMealDetails };

export default connect(mapStateToProps, mapDispatchToProps)(MealPage);
