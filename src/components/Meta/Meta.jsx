import React from "react"
import styles from "./Meta.module.scss"

function Meta(props) {
  const { icon, text, info, variant } = props

  const variants = ["primary", "secondary"]
  const metaVariant = variants.includes(variant)
    ? styles[variant]
    : styles.primary

  return (
    <div className={metaVariant}>
      {icon}
      <span className={styles.text}>{text}</span>
      <span className={styles.info}>{info}</span>
    </div>
  )
}

export default Meta
