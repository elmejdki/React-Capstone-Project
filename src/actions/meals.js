import { getUniqueMeals } from '../helpers';

export const setMeals = meals => ({
  type: 'SET_MEALS',
  meals,
});

export const startSetMeals = () => async disptach => {
  let finalMeals = [];

  const categoriesResponse = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const { categories } = await categoriesResponse.json();

  let mealsResponse;

  await categories.forEach(async category => {
    mealsResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
    );

    const { meals } = await mealsResponse.json();

    finalMeals = finalMeals.concat(meals);
  });

  const mealsSlots = await Promise.all(categories.map(category => new Promise((resolve, reject) => {
    mealsResponse = fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
    ).then(
      response => response.json(),
    ).then(meals => {
      resolve(meals);
    }).catch(err => {
      reject(err);
    });
  })));

  mealsSlots.forEach(meals => {
    finalMeals = finalMeals.concat(meals);
  });

  const result = getUniqueMeals(finalMeals);

  disptach(setMeals(result));

  return result;
};
