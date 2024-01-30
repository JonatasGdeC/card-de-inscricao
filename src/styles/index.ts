import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: #242742;
  }
`
export const Fundo = styled.div`
  background-color: #242742;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  margin: 24px 0;
  font-size: 56px;
  font-weight: 700;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400px;
  line-height: 24px;
`
export const Button = styled.button`
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(#242742 0%, #242742 100%);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: linear-gradient(204.47deg, #ff6a3a 0%, #ff527b 100%);
    box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.5);
    scale: 1.03;
  }
`

export default EstiloGlobal
