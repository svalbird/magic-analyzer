exports.seed = (knex) => {
  return knex('cards')
    .del()
    .then(() => knex('decks').del())
}
