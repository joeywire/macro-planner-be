exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('username', 20).notNullable().unique();
      table.string('password').notNullable().unique();
    })
    .createTable('foods', (table) => {
      table.increments('id');
      table.string('name', 128).notNullable();
      table.string('brand').defaultTo('Not Provided');
      table.string('serving-size').notNullable();
      table.integer('protein');
      table.integer('carbs');
      table.integer('fat');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('foods').dropTableIfExists('users');
};
