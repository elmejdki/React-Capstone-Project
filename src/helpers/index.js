export const getUniqueMeals = meals => {
  const result = [];
  const uniqueMeals = {};

  meals.forEach(({
    idMeal, strMeal, strMealThumb, category,
  }) => {
    if (!uniqueMeals[idMeal]) {
      uniqueMeals[idMeal] = {
        title: strMeal,
        image: strMealThumb,
        category,
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
