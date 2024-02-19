import React from 'react'
import styles from "./styles/triage.module.css";
const Triage_Content = ({content}) => {
  return (
    <main className={styles.main}>
      {content}
    </main>
  )
}

export default Triage_Content