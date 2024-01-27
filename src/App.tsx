import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Fundo } from './styles'
import CardInscricao from './containers/CardInscricao'
import CardAgradecimento from './containers/CardAgradecimento'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <CardInscricao />
  },
  {
    path: '/thanks',
    element: <CardAgradecimento />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Fundo>
        <RouterProvider router={rotas} />
      </Fundo>
    </>
  )
}

export default App
