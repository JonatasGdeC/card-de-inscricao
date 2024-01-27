import { Title, Text, Button } from '../../styles/index'
import * as S from './styles'

import imgCheck from '../../images/check.png'
import imgTablet from '../../images/tablet.png'
import imgLousa from '../../images/lousa.png'
import imgDados from '../../images/dados.png'

const CardInscricao = () => {
  return (
    <S.Card>
      <S.Informativo>
        <Title>Stay updated!</Title>
        <Text>Join 60,000+ product managers receiving monthly updates on:</Text>
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
        <S.Form>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@company.com" />
          <Button type="submit">Subscribe to monthly newsletter</Button>
        </S.Form>
      </S.Informativo>
      <S.Imagens>
        <img src={imgTablet} alt="" />
        <img src={imgLousa} alt="" />
        <img src={imgDados} alt="" />
      </S.Imagens>
    </S.Card>
  )
}

export default CardInscricao
