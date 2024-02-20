import React from 'react'
import styles from "./styles/labo.module.css";
const Labo_Content = ({content}) => {
  return (
    <main className={styles.main}>
      {content}
    </main>
  )
}

export default Labo_Content