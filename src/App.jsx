import TenteNovamente from './components/TenteNovamente/TenteNovamente'
import Home from './components/home/Home'
import { useState } from 'react'
import VoceVenceu from './components/voceVenceu/VoceVenceu'

function App() {
  const [palavra] = useState(['a', 'n', 'a'])

  const [letraDigitada, setLetraDigitada] = useState([])
  const [letrasErradas, setLetrasErradas] = useState([])
  const [letrasCertas, setLetrasCertas] = useState([])
  let novoArray = palavra.filter(function (este, i) {
    return palavra.indexOf(este) === i;
  });
  let letrasCertasFilter = letrasCertas.filter(function (este, i) {
    return letrasCertas.indexOf(este) === i;
  });

  const jogando = () => {
    return (

      (letrasErradas.length < 3 && letrasCertasFilter.length !== novoArray.length) && (<Home palavra={palavra} letraDigitada={letraDigitada} setLetraDigitada={setLetraDigitada} letrasErradas={letrasErradas} setLetrasErradas={setLetrasErradas} letrasCertas={letrasCertas} setLetrasCertas={setLetrasCertas} />)
    )
  }

  const derrota = () => {
    return (
      letrasErradas.length >= 3 && <TenteNovamente />
    )
  }

  const vitoria = () => {
    return (
      letrasCertasFilter.length == novoArray.length && <VoceVenceu palavra={palavra} letrasCertas={letrasCertas} />
    )
  }

  return (
    <>
      {jogando()}
      {derrota()}
      {vitoria()}
    </>
  )
}

export default App
