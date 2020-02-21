
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', proj => {
      proj.increments();
      proj.string('project_name', 128)
        // .unique()
        .notNullable()
      proj.text('description')
        .notNullable()
      proj.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects');
};
