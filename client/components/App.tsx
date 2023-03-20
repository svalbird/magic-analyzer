import {
  Card,
  Title,
  Text,
  Grid,
  Col,
  DonutChart,
  CategoryBar,
  Flex,
  BarChart,
  List,
  ListItem,
  Metric,
  Dropdown,
  DropdownItem,
  Button,
} from '@tremor/react'
import { useState } from 'react'
import DeckLoad from './DeckLoad'
const mana = [
  { name: 'White', cards: 20 },
  { name: 'Blue', cards: 8 },
  { name: 'Black', cards: 12 },
  { name: 'Red', cards: 0 },
  { name: 'Green', cards: 26 },
  { name: 'Colorless', cards: 30 },
]
const chartdata = [
  {
    name: 0,
    count: 0,
  },
  {
    name: 1,
    count: 6,
  },
  {
    name: 2,
    count: 17,
  },
  {
    name: 3,
    count: 15,
  },
  {
    name: 4,
    count: 10,
  },
  {
    name: 5,
    count: 8,
  },
]
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
function App() {
  return (
    <div>
      <main>
        <Title className="font-sans text-xl">My Dashboard</Title>
        <Text>This is the dashboard for my Tremor project!</Text>

        <Grid numColsLg={8} className="gap-6 mt-6">
          <Col numColSpanLg={1}></Col>
          <Col numColSpanLg={1}>
            <div className="space-y-6">
              <DeckLoad />

              <Card className="h-full">
                {/* style={{ height: 860 }} */}
                <img
                  src="https://cards.scryfall.io/large/front/8/0/8059c52b-5d25-4052-b48a-e9e219a7a546.jpg?1594736914"
                  alt=""
                />
                <Flex className="pt-6">
                  <Title>Colossal Dreadmaw</Title>
                  <Text>4GG</Text>
                </Flex>
                <Text>
                  <i>Creature - Dinosaur</i>
                </Text>
                <Text>
                  If a player would draw a card except the first one they draw
                  in each of their draw steps, that player discards a card
                  instead. If the player discards a card this way, they draw a
                  card. If the player doesn’t discard a card this way, they mill
                  a card.
                </Text>
                <Text>
                  <b>
                    <i>6/6</i>
                  </b>
                </Text>
              </Card>
            </div>
          </Col>
          <Col numColSpanLg={3}>
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
          </Col>

          {/* KPI sidebar */}
          <Col numColSpanLg={2}>
            <div className="space-y-6">
              <Card style={{ height: 330 }}>
                <Title>Color Proportions</Title>
                <Flex>
                  <Text>Ratio of Color ID</Text>
                  <Text>20 | 8 | 12 | 0 | 26</Text>
                </Flex>
                <DonutChart
                  className="mt-6"
                  data={mana}
                  category="cards"
                  index="name"
                  colors={['yellow', 'blue', 'slate', 'red', 'green', 'gray']}
                  showLabel={false}
                  variant="pie"
                />
              </Card>
              <Card>
                <Title>Land Proportions</Title>
                <Flex>
                  <Text>Land-to-Nonland Ratio</Text>
                  <Text>26/100</Text>
                </Flex>
                <CategoryBar
                  categoryPercentageValues={[20, 4, 12, 4, 60]}
                  colors={['rose', 'yellow', 'emerald', 'yellow', 'rose']}
                  percentageValue={26}
                  className="mt-3"
                  tooltip="This shows the proportion of land in your deck, and a quick guide to indicate if there is too few or too many"
                />
              </Card>
              <Card style={{ height: 490 }}>
                <Title>Mana Curve</Title>
                <BarChart
                  className="mt-6"
                  data={chartdata}
                  index="name"
                  categories={['count']}
                  colors={['blue']}
                  showLegend={false}
                />
              </Card>
            </div>
          </Col>
        </Grid>
      </main>
    </div>
  )
}

export default App
