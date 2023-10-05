import React from 'react'
import { useState } from 'react'
import styles from './home.module.css'
import Form from '../form/Form'

function Home({ setLetraDigitada, letraDigitada }) {
  const [palavra] = useState(['m', 'o', 'u', 's', 'e'])
  const [dica] = useState('tem no computador')
  const [letra, setLetra] = useState()
  const [tentativas, setTentativas] = useState(3)

  const inputLetra = (e) => {
    setLetra(e.target.value)
  }

  const adicionaLetra = (e) => {
    e.preventDefault()
    if (letraDigitada.length < 3) {

      if (palavra.includes(letra)) {

      }

      setLetraDigitada(prevList => [...prevList, letra])
      setTentativas(2 - letraDigitada.length)



      document.querySelector('#inputLetra').value = ""
    }
    else (alert("voce perdeu!!"))
  }

  return (
    <div className={styles.fundo}>
      <h1 className={styles.mb}>Advinhe a palavra:</h1>
      <p className={styles.mb}>Dica sobre a palavra: "{dica}"</p>
      <p className={styles.mb}>Voce ainda tem {tentativas} tentativa(s).</p>
      <div className={`${styles.mb} ${styles.palavra}`}>
        {palavra.map((letra, index) => (
          <input key={index} type="text" name="" className={styles.lista__item} />
        ))}
      </div>
      <p className={styles.mb}>Tente advinhar uma letra da palavra:</p>
      <Form inputLetra={inputLetra} adicionaLetra={adicionaLetra} />
      <div className={styles.letrasDigitadas}>
        letras digitadas:
        {letraDigitada.map((letra, index) => (
          <p key={index}> {letra}, </p>
        ))}
      </div>
    </div >
  )
}

export default Home