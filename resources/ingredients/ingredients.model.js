import db from '../../data/dbConfig';

export const getRecipesWithIngredient = id => {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .groupBy('r.recipe_name')
    .select('r.recipe_name')
    .where('ingredient_id', '=', id);
};
