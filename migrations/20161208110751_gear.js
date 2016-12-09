
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gear', table => {
    table.increments();
    table.string('jersey_size');
    table.integer('shoe_size');
    table.string('team_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gear');
};
