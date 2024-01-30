import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import EstiloGlobal, { Fundo } from './styles'
import CardInscricao from './containers/CardInscricao'
import CardAgradecimento from './containers/CardAgradecimento'
import { useState } from 'react'

function App() {
  const [emailCadastrado, setEmailCadastrado] = useState('')
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <CardInscricao onSubmit={(email) => setEmailCadastrado(email)} />
    },
    {
      path: '/thanks',
      element: <CardAgradecimento email={emailCadastrado} />
    }
  ])

  return (
    <>
      <EstiloGlobal />
      <Fundo>
        <AnimatePresence>
          <RouterProvider router={rotas} />
        </AnimatePresence>
      </Fundo>
    </>
  )
}

export default App
