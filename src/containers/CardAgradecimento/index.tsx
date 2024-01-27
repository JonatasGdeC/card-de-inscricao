import * as S from './styles'
import { Title, Text, Button } from '../../styles/index'

import imgCard from '../../images/check1.png'

const CardAgradecimento = () => {
  return (
    <S.Card>
      <img src={imgCard} alt="" />
      <Title>Thanks for subscribing!</Title>
      <Text>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </Text>
      <Button>Dismiss message</Button>
    </S.Card>
  )
}

export default CardAgradecimento
