/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('infos', (table) => {
    table.increments('id').primary()
    table.string('unique_id')
    table.string('oracle_id')
    table.string('name')
    table.string('uri')
    table.string('description')
    table.string('image_small')
    table.string('image_normal')
    table.string('image_large')
    table.string('art_crop')
    table.string('mana_cost')
    table.integer('cmc')
    table.string('type_line')
    table.string('oracle_text')
    table.string('power')
    table.string('toughness')
    table.string('color_id')
    table.string('keywords')
    table.string('set_name')
    table.string('rarity')
    table.string('flavor_text')
    table.string('artist')
    table.integer('edhrec_rank')
    table.string('price_usd')
    table.string('lang')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('infos')
}
