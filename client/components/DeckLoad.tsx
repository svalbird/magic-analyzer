import { Flex, Dropdown, DropdownItem, Button, Card } from '@tremor/react'

function DeckLoad() {
  return (
    <div className="deckLoad">
      <Card>
        <Dropdown
          onValueChange={(value) => console.log('The selected value is', value)}
          placeholder="Select deck..."
        >
          <DropdownItem value="Cool Blue" text={'Cool Blue'} />
          <DropdownItem value="Red Aggro" text={'Red Aggro'} />
          <DropdownItem value="Green Ramp" text={'Green Ramp'} />
        </Dropdown>
        <div className="pt-2">
          <Button size="xs" onClick={() => console.log('clicked')}>
            Load Deck
          </Button>
        </div>
        <div className="pt-2">
          <Button size="xs" onClick={() => console.log('clicked')} color="gray">
            Import Deck...
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default DeckLoad
