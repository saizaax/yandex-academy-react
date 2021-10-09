import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import Button from "../Button/Button"
import styles from "./RepoHeader.module.scss"

import { ReactComponent as SettingsIcon } from "../../icons/settings.svg"
import { ReactComponent as RunIcon } from "../../icons/play.svg"

import * as actions from "../../repository/actions"

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
        <Link to="/settings">
          <Button variant="icon-small" icon={<SettingsIcon />} />
        </Link>
      </div>
    </header>
  )
}

export default RepoHeader
