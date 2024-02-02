import styled from 'styled-components'

export const Card = styled.div`
  max-width: 928px;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 24px 24px 24px 0;
  border-radius: 36px;
`

export const Informativo = styled.div`
  padding: 74px 0 74px 64px;
`

export const Lista = styled.ul`
  margin: 24px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`

type Props = {
  emailCorreto: boolean
}

export const Form = styled.form<Props>`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    label {
      font-weight: bold;
      cursor: pointer;
    }

    p {
      color: #ff6155;
      font-weight: bold;
      display: ${(props) => (props.emailCorreto ? 'none' : 'block')};
    }
  }

  input {
    padding: 16px 24px;
    margin: 8px 0 24px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 8px;
    border-color: ${(props) =>
      props.emailCorreto ? 'rgba(25, 24, 43, 0.25)' : '#FF6155'};
    background: ${(props) => (props.emailCorreto ? '#fff' : '#fbd8d6')};
    color: ${(props) => (props.emailCorreto ? '#242742' : '#FF6155')};
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    &::placeholder {
      color: ${(props) =>
        props.emailCorreto ? 'rgba(25, 24, 43, 0.7)' : '#FF6155'};
    }
  }
`

export const Imagens = styled.div`
  background: linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);
  border-radius: 16px;
  position: relative;
  width: 400px;
  height: 590px;

  img:nth-child(1) {
    position: absolute;
    left: 0;
    top: 210px;
  }

  img:nth-child(2) {
    position: absolute;
    right: 0;
    top: 115px;
  }

  img:nth-child(3) {
    position: absolute;
    right: 0;
    top: 90px;
  }
`
