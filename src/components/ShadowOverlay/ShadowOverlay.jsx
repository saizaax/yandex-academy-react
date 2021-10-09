import React from "react"
import styles from "./ShadowOverlay.module.scss"

function ShadowOverlay(props) {
  const { modal } = props

  return (
    <div className={styles.shadow}>{modal}</div>
  )
}

export default ShadowOverlay