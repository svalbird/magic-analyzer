import { Card, Flex, Title, Text, Badge } from '@tremor/react'
import { useEffect, useState } from 'react'
import { cardInDeck } from '../../types/cardFull'
interface Props {
  deck: cardInDeck[]
  cardname: string
}

function CardDisplay(props: Props) {
  let currentCard: cardInDeck | false = false

  currentCard = props.deck.find((card) => {
    return card.name === props.cardname
  }) as cardInDeck

  if (!currentCard) {
    return (
      <div>
        <Card className="h-full"></Card>
      </div>
    )
  }
  return (
    <div>
      <Card className="sticky">
        {/* style={{ height: 860 }} */}
        <img src={currentCard?.image_large} alt="" />
        <Flex className="pt-6">
          <Title>{currentCard?.name}</Title>
          <Text>{currentCard?.mana_cost}</Text>
        </Flex>
        <Text>
          <i>{currentCard?.type_line}</i>
        </Text>
        <Text>{currentCard.oracle_text}</Text>
        {currentCard?.power && (
          <Text>
            <b>
              <i>{`${currentCard?.power}/${currentCard?.toughness}`}</i>
            </b>
          </Text>
        )}
        {currentCard?.flavor_text && (
          <Text>
            <i>{currentCard?.flavor_text}</i>
          </Text>
        )}
        {currentCard?.edhrec_rank && (
          <Badge
            size="sm"
            className="mt-6"
          >{`EDHRec Rank : ${currentCard?.edhrec_rank}`}</Badge>
        )}
        {currentCard?.price_usd && (
          <Badge color="green" size="sm">
            {`USD: $${currentCard?.price_usd}`}
          </Badge>
        )}
      </Card>
    </div>
  )
}

export default CardDisplay
