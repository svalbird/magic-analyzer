import { Card, Title, Flex, DonutChart, Text } from '@tremor/react'
const mana = [
  { name: 'White', cards: 20 },
  { name: 'Blue', cards: 8 },
  { name: 'Black', cards: 12 },
  { name: 'Red', cards: 0 },
  { name: 'Green', cards: 26 },
  { name: 'Colorless', cards: 30 },
]
function ColorProps() {
  return (
    <div>
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
    </div>
  )
}

export default ColorProps
