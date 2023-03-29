import request from 'superagent'

export function importDeck(deckName: string): Promise<number> {
  return request
    .get('/v1/decks/import')
    .send({ name: deckName })
    .then((res) => {
      return res.body.deckId
    })
}
