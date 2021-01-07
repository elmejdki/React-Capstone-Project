export const getUniqueMeals = meals => {
  const result = [];
  const uniqueMeals = {};

  meals.forEach(meal => {
    if (!uniqueMeals[meal.idMeal]) {
      uniqueMeals[meal.idMeal] = {
        title: meal.strMeal,
        image: meal.strMealThumb,
      };
    }
  });

  Object.keys(uniqueMeals).forEach(id => {
    if (id !== 'undefined') {
      result.push({
        id,
        ...uniqueMeals[id],
      });
    }
  });

  return result;
};

export const removeLater = () => true;
