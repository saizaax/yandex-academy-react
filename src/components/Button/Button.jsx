import React from "react"
import styles from "./Button.module.scss"

function Button(props) {
  const { variant, children: text, icon } = props

  const variants = [
    "primary",
    "secondary",
    "disabled",
    "transparent",
    "icon-regular",
    "icon-small",
  ]
  const buttonVariant = variants.includes(variant)
    ? styles[variant]
    : styles.primary

  return (
    <button className={buttonVariant}>
      {icon}
      {text}
    </button>
  )
}

export default Button
