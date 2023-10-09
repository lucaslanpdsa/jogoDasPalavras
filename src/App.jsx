import TenteNovamente from './components/TenteNovamente/TenteNovamente'
import Home from './components/home/Home'
import { useState } from 'react'
import VoceVenceu from './components/voceVenceu/VoceVenceu'

function App() {
  const [palavras] = useState([
    {
      palavra: ['m', 'o', 'u', 's', 'e'],
      dica: 'Tem no computador'
    },
    {
      palavra: ['j', 'a', 'v', 'a'],
      dica: 'Linguagem de programação'
    },
    {
      palavra: ['p', 'l', 'e', 'n', 'o'],
      dica: 'Nivel de programador'
    },
    {
      palavra: ['b', 'a', 's', 'q', 'u', 'e', 't', 'e'],
      dica: 'Esporte'
    },
    {
      palavra: ['r', 'e', 'a', 'c', 't'],
      dica: 'Framework javascript'
    },
  ])
  const [numeroAleatorio] = useState([Math.floor(Math.random() * 5)])

  const [dica] = useState(palavras[numeroAleatorio].dica)
  const [palavra] = useState(palavras[numeroAleatorio].palavra)

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

      (letrasErradas.length < 3 && letrasCertasFilter.length !== novoArray.length) && (<Home palavra={palavra} letraDigitada={letraDigitada} setLetraDigitada={setLetraDigitada} letrasErradas={letrasErradas} setLetrasErradas={setLetrasErradas} letrasCertas={letrasCertas} setLetrasCertas={setLetrasCertas} dica={dica} />)
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
