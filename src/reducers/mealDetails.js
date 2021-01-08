const mealDetailsReducer = (state = {
  title: '',
  instructions: '',
  image: '',
  area: '',
  category: '',
  youtubeVideo: '',
  ingredients: [],
}, action) => {
  switch (action.type) {
    case 'SET_MEAL_DETAILS':
      return action.mealDetails;
    default:
      return state;
  }
};

export default mealDetailsReducer;
