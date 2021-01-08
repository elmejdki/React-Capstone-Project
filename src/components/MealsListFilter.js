import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter, setCategoryFilter } from '../actions/filters';

const MealsListFilter = ({
  categories, text, category, setTextFilter, setCategoryFilter,
}) => {
  const handleTextChange = event => {
    setTextFilter(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={handleTextChange}
      />
      <select
        onChange={handleCategoryChange}
        value={category}
      >
        <option value="">None</option>
        {
          categories.map(category => (
            <option key={category}>
              {category}
            </option>
          ))
        }
      </select>
    </div>
  );
};

MealsListFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setTextFilter: PropTypes.func.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories, filters }) => ({
  categories,
  text: filters.text,
  category: filters.category,
});

const mapDispatchToProps = { setCategoryFilter, setTextFilter };

export default connect(mapStateToProps, mapDispatchToProps)(MealsListFilter);
