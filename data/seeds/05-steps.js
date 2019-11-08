exports.seed = function(knex) {
  return knex('recipe_steps').insert([
    { recipe_id: 1, step_id: 1, text: 'Do stuff' },
    { recipe_id: 1, step_id: 2, text: 'Do stuff' },
    { recipe_id: 1, step_id: 3, text: 'Do stuff' },
    { recipe_id: 1, step_id: 4, text: 'Do stuff' }
  ]);
};
