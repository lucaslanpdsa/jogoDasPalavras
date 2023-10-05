import React from 'react'
import styles from './VoceVenceu.module.css'

function VoceVenceu({ palavra, letrasCertas }) {
  return (
    <div className={styles.fundo}>
      <form>
        <h1 >Você venceu!!</h1>
        <button className={styles.btn} type="submit">Jogar novamente!</button>
      </form>
      <div className={`${styles.mb} ${styles.palavra}`}>
        {palavra.map((letra, index) => (
          <li key={index} className={styles.lista__item}>
            <p id={letra} className={letrasCertas.includes(letra) ? styles.letraCerta : styles.letraErrada}>{letra}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default VoceVenceu