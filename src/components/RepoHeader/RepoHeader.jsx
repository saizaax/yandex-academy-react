import React from "react"
import Button from "../Button/Button"
import styles from "./RepoHeader.module.scss"
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg"
import { ReactComponent as RunIcon } from "../../icons/play.svg"

function RepoHeader(props) {
  const { title } = props

  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <div className={styles["button-container"]}>
        <Button variant="icon-regular" icon={<RunIcon />}>Run build</Button>
        <Button variant="icon-small" icon={<SettingsIcon />} />
      </div>
    </header>
  )
}

export default RepoHeader