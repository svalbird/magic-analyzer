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
): Promise<{ deckName: string; deck: any[] }> {
  return request.get(`/v1/decks/${deckName}`).then((res) => {
    return res.body
  })
}

export function loadAllDecks(): Promise<string[]> {
  return request.get('v1/decks/alldecks').then((res) => {
    const deckList = res.body
    const output: string[] = []
    deckList.map((deck: { name: string }) => output.push(deck.name))
    return output
  })
}
