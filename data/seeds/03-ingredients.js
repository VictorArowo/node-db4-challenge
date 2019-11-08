exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Rice' },
    { ingredient_name: 'Pepper' },
    { ingredient_name: 'Tomatoes' },
    { ingredient_name: 'Carrots' },
    { ingredient_name: 'Seasoning' }
  ]);
};
