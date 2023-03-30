import express from 'express'
import { extractDeck, loadFullDeck, loadListOfDecks } from '../dataHandler'

const router = express.Router()

router.post('/import', async (req, res) => {
  try {
    const deckName = req.body.name
    const { deckId } = await extractDeck(deckName)
    const output = {
      status: `${deckName} has been successfully imported into the database!`,
      isSuccess: true,
      deckId: deckId,
    }
    res.json(output)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: `Request failed: deck could not be imported!`,
      isSuccess: false,
    })
  }
})

router.get('/alldecks', async (req, res) => {
  try {
    const decks = await loadListOfDecks()
    res.json(decks)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: `Request failed: list of decks could not be loaded!`,
      isSuccess: false,
    })
  }
})

router.get('/:deckname', async (req, res) => {
  try {
    const deckName = req.params.deckname
    const { deck } = await loadFullDeck(deckName)
    res.json({ deck, isSuccess: true, deckName: deckName })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: `Request failed: deck could not be loaded!`,
      isSuccess: false,
    })
  }
})

export default router
