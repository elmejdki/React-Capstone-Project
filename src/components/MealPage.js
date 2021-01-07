import React from 'react';
import PropTypes from 'prop-types';

const MealPage = ({ match }) => (
  <div>
    <h1>
      Meal Page: This the meal ID:
      {match.params.id}
    </h1>
  </div>
);

MealPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MealPage;
