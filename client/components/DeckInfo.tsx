import { Card, Metric, List, ListItem, Text } from '@tremor/react'
const deckData = [
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Colossal Dreadmaw',
    count: 4,
  },
  {
    name: 'Forest',
    count: 60,
  },
]
function DeckInfo() {
  return (
    <div>
      <Card className="h-full">
        <Metric>Deck Name</Metric>
        <Text>Matthew Randle</Text>
        <List>
          <ListItem>
            <span>
              <b>Card Name</b>
            </span>
            <span>
              <b>Number</b>
            </span>
          </ListItem>
          {deckData.map((card, index) => (
            <ListItem key={index}>
              <span>{card.name}</span>
              <span>{card.count}</span>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  )
}
