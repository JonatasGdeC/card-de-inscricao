import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { Title, Text, Button } from '../../styles/index'

import imgCard from '../../images/check1.png'

interface CardAgradecimentoProps {
  email: string
}

const CardAgradecimento: React.FC<CardAgradecimentoProps> = ({ email }) => {
  const navigate = useNavigate()
  const voltarCardInscricao = () => {
    navigate('/')
  }

  return (
    <S.Card>
      <img src={imgCard} alt="" />
      <Title>Thanks for subscribing!</Title>
      <Text>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription.
      </Text>
      <Button onClick={voltarCardInscricao}>Dismiss message</Button>
    </S.Card>
  )
}

export default CardAgradecimento
