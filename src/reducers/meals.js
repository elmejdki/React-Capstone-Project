const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEALS':
      return [
        ...state,
        action.meals,
      ];
    default:
      return state;
  }
};

export default mealsReducer;
