import React from "react"
import { useDispatch } from "react-redux"
import Link from "next/link"

import Button from "../Button/Button"
import styles from "./RepoHeader.module.scss"

import SettingsIcon from "../../icons/settings.svg"
import RunIcon from "../../icons/play.svg"

import * as actions from "../../repository/actions"
import ButtonNext from "../ButtonNext/ButtonNext"

function RepoHeader(props) {
  const { title } = props

  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <div className={styles["button-container"]}>
        <Button
          variant="icon-regular"
          icon={<RunIcon />}
          onClick={() => dispatch(actions.switchOverlay())}
        >
          Run build
        </Button>
        <Link href="/settings">
          <ButtonNext variant="icon-small" icon={<SettingsIcon />} />
        </Link>
      </div>
    </header>
  )
}

export default RepoHeader
