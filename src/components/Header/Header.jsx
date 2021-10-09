import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import styles from "./Header.module.scss"
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg"

function Header(props) {
  const { title, isSettingsButton } = props

  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      {isSettingsButton ? (
        <Link to="/settings">
          <Button variant="icon-regular" icon={<SettingsIcon />}>
            Settings
          </Button>
        </Link>
      ) : null}
    </header>
  )
}

export default Header
