import EstiloGlobal, { Fundo } from './styles'
import CardInscricao from './containers/CardInscricao'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Fundo>
        <CardInscricao />
      </Fundo>
    </>
  )
}

export default App
