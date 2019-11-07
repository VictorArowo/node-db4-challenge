exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments();

      table
        .text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', table => {
      table.increments();

      table
        .text('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('units', table => {
      table.increments();

      table
        .text('unit_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipe_ingredients', table => {
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');

      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');

      table
        .integer('unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('units');

      table.decimal('quantiy').notNullable();
    })
    .createTable('recipe_steps', table => {
      table.increments();

      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');

      table.integer('step_id').notNullable();
      table.text('text', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('units')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipe_steps');
};
