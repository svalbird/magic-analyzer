const { default: knex } = require('knex')
const fs = require('node:fs/promises')

const config = require('./db/knexfile').development
const connection = require('knex')(config)

async function extractDeck(deckName: string, deckPath: string) {
  if (deckPath === '') {
    deckPath = './testSet/'
  }
  const deck = await fs.readFile(`${deckPath}${deckName}.txt`)
  const deckObject = formatDeckToArray(deck)
}

function formatDeckToArray(deck: string) {
  const newlineSplit: string[] = deck.split(/\r?\n/).slice(1)
  const deckObject: any = []
  for (card of newlineSplit) {
    const dicedCard = card.split()
    const cardQty = Number(dicedCard[0])
    const cardName = dicedCard.slice(1).join()
    deckObject.push({ name: cardName, qty: cardQty })
  }
  return deckObject
}
