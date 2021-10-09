import React from "react"
import styles from "./ErrorCard.module.scss"

function ErrorCard(props) {
  const { children: text } = props

  return (
    <div className={styles.error}>{text}</div>
  )
}

export default ErrorCard