import React from 'react'
import styles from "./styles/inf.module.css";
const INF_Content = ({content}) => {
  return (
    <main className={styles.main}>
      {content}
    </main>
  )
}

export default INF_Content