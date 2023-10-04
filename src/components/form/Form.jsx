import React from 'react'
import styles from './form.module.css'

function Form({ adicionaLetra, inputLetra }) {
  return (
    <>
      <form onSubmit={adicionaLetra} className={styles.mb}>
        <input onChange={inputLetra} type="text" className={styles.campo} maxLength={1} id='inputLetra' placeholder='_' />
        <input type="submit" value="jogar!" className={styles.btn} />
      </form>
    </>
  )
}

export default Form