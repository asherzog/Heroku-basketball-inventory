
exports.seed = function(knex, Promise) {
  return knex('gear').del()
    .then(function () {
      var basketballGear = [{
        jersey_size: 'L',
        shoe_size: 12,
        team_name: 'Wombats'
      }, {
        jersey_size: 'M',
        shoe_size: 10,
        team_name: 'Nuggets'
      }, {
        jersey_size: 'S',
        shoe_size: 9,
        team_name: 'Panthers'
      }, {
        jersey_size: 'xL',
        shoe_size: 17,
        team_name: 'Shaqs'
      }];

      return knex('gear').insert(basketballGear);
    });
};
