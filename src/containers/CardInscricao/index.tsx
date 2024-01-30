import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Title, Text, Button } from '../../styles/index'
import * as S from './styles'

import imgCheck from '../../images/check.png'
import imgTablet from '../../images/tablet.png'
import imgLousa from '../../images/lousa.png'
import imgDados from '../../images/dados.png'

interface CardInscricaoProps {
  onSubmit: (email: string) => void
}

const CardInscricao: React.FC<CardInscricaoProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const cadastroEmail = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(email)
    navigate('/thanks')
  }

  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
      exit={{ opacity: 0.7, transition: { duration: 0.3 } }}
    >
      <S.Card>
        <S.Informativo>
          <Title>Stay updated!</Title>
          <Text>
            Join 60,000+ product managers receiving monthly updates on:
          </Text>
          <S.Lista>
            <li>
              <img src={imgCheck} alt="check" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <img src={imgCheck} alt="check" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <img src={imgCheck} alt="check" />
              <p>And much more!</p>
            </li>
          </S.Lista>
          <S.Form onSubmit={cadastroEmail}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Subscribe to monthly newsletter</Button>
          </S.Form>
        </S.Informativo>
        <S.Imagens>
          <img src={imgTablet} alt="" />
          <img src={imgLousa} alt="" />
          <img src={imgDados} alt="" />
        </S.Imagens>
      </S.Card>
    </motion.div>
  )
}

export default CardInscricao
