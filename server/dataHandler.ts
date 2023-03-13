const { default: knex } = require('knex')
const fs = require('node:fs/promises')

const config = require('./db/knexfile').development
const connection = require('knex')(config)

//EXTERNAL FUNCTIONS
async function extractDeck(deckName: string, deckPath: string) {
  if (deckPath === '') {
    deckPath = './testSet/'
  }
  const deck = await fs.readFile(`${deckPath}${deckName}.txt`)
  const deckObject = formatDeckToArray(deck)
  await addDeckToDb(deckName, deckObject)
}

async function loadDeck(deckName: string, db = connection) {
  const deckId = await db('decks')
    .where({ name: deckName })
    .returning('id')
    .first().id

  return await db('cards').where({ deckId: deckId })
}

//INTERNAL FUNCTIONS
function formatDeckToArray(deck: string) {
  const newlineSplit: string[] = deck.split(/\r?\n/).slice(1)
  const deckObject: any = []
  for (card of newlineSplit) {
    const dicedCard = card.split()
    const cardQty = Number(dicedCard[0])
    const cardName = dicedCard.slice(2).join()
    deckObject.push({ name: cardName, qty: cardQty })
  }
  return deckObject
}

async function addDeckToDb(deckName: string, deckObject: any, db = connection) {
  const deckId = await db('decks').insert({ name: deckName }).returning('id')[0]
  for (card of deckObject) {
    await db('cards').insert({
      name: card.name,
      quantity: card.qty,
      deckId: deckId,
    })
  }
}

export { extractDeck, loadDeck }
