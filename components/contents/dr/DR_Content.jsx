import React from 'react'
import styles from "./styles/dr.module.css";
const DR_Content = ({content}) => {
  return (
    <main className={styles.main}>
      {content}
    </main>
  )
}

export default DR_Content