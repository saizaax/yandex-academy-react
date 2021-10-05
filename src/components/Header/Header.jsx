import React from "react"
import Button from "../Button/Button"
import styles from "./Header.module.scss"
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg"

function Header(props) {
  const { title } = props

  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <Button variant="icon-regular" icon={<SettingsIcon />}>
        Settings
      </Button>
    </header>
  )
}

export default Header
