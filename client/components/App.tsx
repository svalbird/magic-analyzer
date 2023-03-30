import { Route, Routes } from 'react-router-dom'
import DeckDisplayAll from './DeckDisplayAll'
import Home from './Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:deckName" element={<DeckDisplayAll />} />
      </Routes>
    </div>
  )
}

export default App
