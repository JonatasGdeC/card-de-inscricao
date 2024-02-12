import { FormEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Title, Text, Button } from '../../styles/index'
import * as S from './styles'

import imgCheck from '../../images/check.png'

import imgTablet from '../../images/tablet.png'
import imgLousa from '../../images/lousa.png'
import imgDados from '../../images/dados.png'

import imgTabletMobile from '../../images/tablet-mobile.png'
import imgLousaMobile from '../../images/lousa-mobile.png'
import imgDadosMobile from '../../images/dados-mobile.png'

interface CardInscricaoProps {
  onSubmit: (email: string) => void
}

const CardInscricao: React.FC<CardInscricaoProps> = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [emailPreeenchido, setEmailPreenchido] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  const emailFilter = /^.+@.+\..{2,}$/
  // eslint-disable-next-line no-useless-escape
  const illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/

  const cadastroEmail = (e: FormEvent) => {
    e.preventDefault()
    if (emailPreeenchido) {
      onSubmit(email)
      navigate('/thanks')
    }
  }

  const atualizarTamanhoDaTela = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', atualizarTamanhoDaTela)
    return () => {
      window.removeEventListener('resize', atualizarTamanhoDaTela)
    }
  })

  const telaMobile = () => {
    if (width > 1024) {
      return false
    }
    return true
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { delay: 0.3, duration: 0.5 } }}
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
          <S.Form emailCorreto={emailPreeenchido} onSubmit={cadastroEmail}>
            <div>
              <label htmlFor="email">Email address</label>
              <p>Valid email required</p>
            </div>
            <input
              type="text"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              onClick={() =>
                setEmailPreenchido(() => {
                  if (
                    email === '' ||
                    !emailFilter.test(email) ||
                    email.match(illegalChars)
                  ) {
                    return false
                  } else {
                    return true
                  }
                })
              }
            >
              Subscribe to monthly newsletter
            </Button>
          </S.Form>
        </S.Informativo>
        <S.Imagens>
          <motion.img
            initial={{ scale: 0, left: -100 }}
            animate={{
              scale: 1,
              left: 0,
              transition: { delay: 0.5, duration: 0.7 }
            }}
            src={telaMobile() ? imgTabletMobile : imgTablet}
            alt=""
          />
          <motion.img
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, transition: { delay: 0.7, duration: 1.0 } }}
            src={telaMobile() ? imgLousaMobile : imgLousa}
            alt=""
          />
          <motion.img
            initial={{ right: -10 }}
            animate={{ right: 0, transition: { delay: 0.5, duration: 0.7 } }}
            src={telaMobile() ? imgDadosMobile : imgDados}
            alt=""
          />
        </S.Imagens>
      </S.Card>
    </motion.div>
  )
}

export default CardInscricao
