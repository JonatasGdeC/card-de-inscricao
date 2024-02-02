import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: 0.3, duration: 0.5 } }}
    >
      <S.Card>
        <img src={imgCard} alt="" />
        <Title>Thanks for subscribing!</Title>
        <Text>
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription.
        </Text>
        <Button onClick={voltarCardInscricao}>Dismiss message</Button>
      </S.Card>
    </motion.div>
  )
}

export default CardAgradecimento
