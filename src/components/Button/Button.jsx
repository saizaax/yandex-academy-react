import React from "react"
import styles from "./Button.module.scss"

function Button(props) {
  const { variant, children: text, icon, onClick } = props

  const variants = [
    "primary",
    "secondary",
    "disabled",
    "transparent",
    "regular",
    "icon-regular",
    "icon-small",
  ]
  const buttonVariant = variants.includes(variant)
    ? styles[variant]
    : styles.primary

  return (
    <button className={buttonVariant} onClick={onClick ? onClick : null}>
      {icon}
      {text}
    </button>
  )
}

export default Button
