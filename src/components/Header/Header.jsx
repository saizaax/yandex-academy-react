import React from "react"
import Link from "next/link"
import Button from "../Button/Button"
import styles from "./Header.module.scss"
import SettingsIcon from "../../icons/settings.svg"
import ButtonNext from "../ButtonNext/ButtonNext"

function Header(props) {
  const { title, isSettingsButton } = props

  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      {isSettingsButton ? (
        <Link href="/settings">
          <ButtonNext variant="icon-regular" icon={<SettingsIcon />}>
            Settings
          </ButtonNext>
        </Link>
      ) : null}
    </header>
  )
}

export default Header
