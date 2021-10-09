import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styles from "./BuildModal.module.scss"

import Input from "../Input/Input"
import Button from "../Button/Button"

import * as actions from "../../repository/actions"

function BuildModal(props) {
  const [commitHash, setCommitHash] = useState("")

  const dispatch = useDispatch()

  return (
    <div className={styles.modal}>
      <h3>New build</h3>
      <p>Enter the commit hash which you want to build.</p>
      <Input
        placeholder="Commit Hash"
        value={commitHash}
        setValue={setCommitHash}
      />
      <div className={styles.buttons}>
        <Button variant="primary">Run build</Button>
        <Button
          variant="transparent"
          onClick={() => dispatch(actions.switchOverlay())}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default BuildModal
