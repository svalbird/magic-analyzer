import { Card, Flex, Title, Text } from '@tremor/react'

function CardDisplay() {
  return (
    <div>
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
          If a player would draw a card except the first one they draw in each
          of their draw steps, that player discards a card instead. If the
          player discards a card this way, they draw a card. If the player
          doesn’t discard a card this way, they mill a card.
        </Text>
        <Text>
          <b>
            <i>6/6</i>
          </b>
        </Text>
      </Card>
    </div>
  )
}

export default CardDisplay
