exports.seed = function(knex) {
  return knex('units').insert([
    { unit_name: 'Kilogrammes' },
    { unit_name: 'Pounds' },
    { unit_name: 'Litres' },
    { unit_name: 'Tonnes' }
  ]);
};
