import db from '../../data/dbConfig';

export const getRecipes = () => {
  return db('recipes');
};

export const getShoppingList = id => {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .join('units as u', 'ri.unit_id', 'u.id')
    .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity', 'u.unit_name')
    .where('recipe_id', '=', id);
};

export const getInstructions = id => {
  return db('recipe_steps as rs')
    .join('recipes as r', 'rs.recipe_id', 'r.id')
    .select('r.recipe_name', 'rs.step_id', 'rs.text')
    .orderBy('rs.step_id', 'asc')
    .where('recipe_id', '=', id);
};
