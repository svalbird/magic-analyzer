import request from 'superagent'

export function importDeck(deckName: string): Promise<number> {
  return request
    .get('/v1/decks/import')
    .send({ name: deckName })
    .then((res) => {
      return res.body.deckId
    })
}

export function loadDeck(
  deckName: string
): Promise<{ cardName: string; deck: any[] }> {
  return request.get(`/v1/decks/${deckName}`).then((res) => {
    return res.body
  })
}
