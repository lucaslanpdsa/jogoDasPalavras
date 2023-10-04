import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [palavra] = useState(['m', 'o', 'u', 's', 'e'])
  const [dica] = useState('tem no computador')
  const [letra, setLetra] = useState()
  const [letraDigitada, setLetraDigitada] = useState([])
  const [tentativas, setTentativas] = useState(3)

  const inputLetra = (e) => {
    setLetra(e.target.value)
  }

  const adicionaLetra = (e) => {
    e.preventDefault()
    if (letraDigitada.length < 3) {
      setLetraDigitada(prevList => [...prevList, letra])
      setTentativas(2 - letraDigitada.length)
      document.querySelector('#inputLetra').value = ""
    } else (alert("voce perdeu!!"))
  }

  return (
    <div className={styles.fundo}>
      <p>Pontuação: </p>
      <h1 className={styles.mb}>Advinhe a palavra:</h1>
      <p className={styles.mb}>Dica sobre a palavra: "{dica}"</p>
      <p className={styles.mb}>Voce ainda tem {tentativas} tentativa(s).</p>
      <div className={`${styles.mb} ${styles.palavra}`}>
        {palavra.map((letra, index) => (
          <input key={index} type="text" name="" className={styles.lista__item} />
        ))}
      </div>
      <p className={styles.mb}>Tente advinhar uma letra da palavra:</p>
      <form onSubmit={adicionaLetra} className={styles.mb}>
        <input onChange={inputLetra} type="text" className={styles.campo} maxLength={1} id='inputLetra' placeholder='_' />
        <input type="submit" value="jogar!" className={styles.btn} />
      </form>
      <div className={styles.letrasDigitadas}>
        letras digitadas:
        {letraDigitada.map((letra, index) => (
          <p key={index}> {letra}, </p>
        ))}
      </div>
    </div >
  )
}

export default App
