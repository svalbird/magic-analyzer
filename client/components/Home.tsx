import { Button, Dropdown, DropdownItem } from '@tremor/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import useFetchListDecks from './hooks/useFetchListDecks'

function Home() {
  const { deckList, loading, error, fetchListDecks } = useFetchListDecks()
  const [deckName, setDeckName] = useState('')
  const navigate = useNavigate()

  const routeChange = () => {
    const path = deckName
    navigate(`../${path}`)
  }

  return (
    <div>
      <h2>Load a deck!</h2>
      <Dropdown
        onValueChange={(value) => setDeckName(value)}
        placeholder="Select deck..."
      >
        {deckList.map((deck: string, index: number) => {
          return <DropdownItem value={deck} text={deck} key={index} />
        })}
      </Dropdown>
      <div className="pt-2 flex justify-items-center justify-evenly">
        <Button size="xs" onClick={routeChange} icon={ArrowUpTrayIcon}>
          Load Deck
        </Button>
      </div>
      <div className="pt-2 flex justify-items-center justify-evenly">
        <Button
          size="xs"
          onClick={() => console.log('clicked')}
          color="gray"
          icon={ArrowDownTrayIcon}
        >
          Import Deck...
        </Button>
      </div>
    </div>
  )
}

export default Home
