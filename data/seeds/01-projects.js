
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'work data points', description: 'aspect sentiment data points', completed: 0},
        {project_name: 'aspect texts', description: 'adding to aspect sentiment analysis', completed: 1},
        {project_name: 'work on learning pandas and sklearn packages', description: 'apply it to my other projects', completed: 1}
      ]);
    });
};
