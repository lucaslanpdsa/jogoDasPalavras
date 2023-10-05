import TenteNovamente from './components/TenteNovamente/TenteNovamente'
import Home from './components/home/Home'
import { useState } from 'react'

function App() {
  const [letraDigitada, setLetraDigitada] = useState([])
  return (
    <>
      {letraDigitada.length < 3 && <Home letraDigitada={letraDigitada} setLetraDigitada={setLetraDigitada} />}
      {letraDigitada.length >= 3 && <TenteNovamente />}
    </>
  )
}

export default App
