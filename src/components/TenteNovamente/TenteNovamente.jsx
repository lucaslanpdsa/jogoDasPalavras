import React from 'react'
import styles from './TenteNovamente.module.css'

function TenteNovamente() {
  return (
    <div className={styles.fundo}>
      <form>
        <h1 >Você perdeu!!</h1>
        <button className={styles.btn} type="submit">Tentar novamente!</button>
      </form>
    </div>
  )
}

export default TenteNovamente
