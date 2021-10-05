import React from "react"
import styles from "./Status.module.scss"

function Status(props) {
  const { number, title, variant } = props

  const variants = ["success", "warning", "error"]
  const statusVariant = variants.includes(variant) ? styles[variant] : styles.success

  return (
    <div className={statusVariant}>
      <h5>#{number}</h5>
      <p>{title}</p>
    </div>
  )
}

export default Status
