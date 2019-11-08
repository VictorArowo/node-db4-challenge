exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, unit_id: 1, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 2, unit_id: 1, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 3, unit_id: 1, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 4, unit_id: 1, quantity: 0.5 },
    { recipe_id: 1, ingredient_id: 5, unit_id: 1, quantity: 0.5 }
  ]);
};
