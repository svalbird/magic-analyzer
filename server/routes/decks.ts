import express, { Router } from 'express'
import { extractDeck } from '../dataHandler'

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

router.get('/:deckname', async (req, res) => {
  try {
    const deckName = req.params.deckname
    // load full deck from db function here
    // output deck json object
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: `Request failed: deck could not be loaded!`,
      isSuccess: false,
    })
  }
})

export default router
