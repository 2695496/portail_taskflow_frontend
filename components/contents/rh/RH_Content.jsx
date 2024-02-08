import React from 'react'
import styles from "./styles/rh.module.css";
const RH_Content = ({content}) => {
  return (
    <main className={styles.main}>
      {content}
    </main>
  )
}

export default RH_Content