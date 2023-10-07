import React from 'react'
import { useState } from 'react'
import styles from './home.module.css'
import Form from '../form/Form'

function Home({ setLetraDigitada, letraDigitada, letrasErradas, setLetrasErradas, letrasCertas, setLetrasCertas, palavra, dica }) {
  const [letra, setLetra] = useState()
  const [tentativas, setTentativas] = useState(3)
  let letraDigitadaFilter = letraDigitada.filter(function (este, i) {
    return letraDigitada.indexOf(este) === i;
  });

  const inputLetra = (e) => {
    setLetra(e.target.value)
  }

  const adicionaLetra = (e) => {
    e.preventDefault()
    if (palavra.includes(letra)) {
      setLetrasCertas(prevList => [...prevList, letra])
      setLetraDigitada(prevList => [...prevList, letra])
    } else if (!palavra.includes(letra) && letra !== 0) {
      setLetrasErradas(prevList => [...prevList, letra])
      setLetraDigitada(prevList => [...prevList, letra])
    }

    setTentativas(3 - (letrasErradas.length + 1))

    document.querySelector('#inputLetra').value = ""
  }

  return (
    <div className={styles.fundo}>
      <h1 className={styles.mb}>Advinhe a palavra:</h1>
      <p className={styles.mb}>Dica sobre a palavra: "{dica}"</p>
      <p className={styles.mb}>Voce ainda tem {tentativas} tentativa(s).</p>
      <ul className={`${styles.mb} ${styles.palavra}`}>
        {palavra.map((letra, index) => (
          <li key={index} className={styles.lista__item}>
            <p id={letra} className={letrasCertas.includes(letra) ? styles.letraCerta : styles.letraErrada}>{letra}</p>
          </li>
        ))}
      </ul>
      <p className={styles.mb}>Tente advinhar uma letra da palavra:</p>
      <Form inputLetra={inputLetra} adicionaLetra={adicionaLetra} />
      <div className={styles.letrasDigitadas}>
        letras digitadas:
        {letraDigitadaFilter.map((letra, index) => (
          <p key={index}> {letra}, </p>
        ))}
      </div>
    </div >
  )
}

export default Home