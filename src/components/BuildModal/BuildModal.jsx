import React, { useContext, useState } from "react"
import styles from "./BuildModal.module.scss"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { StateContext } from "../../repository/StateContext"

function BuildModal(props) {
  const [commitHash, setCommitHash] = useState("")

  const [, dispatch] = useContext(StateContext)

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
          onClick={() => dispatch({ type: "switchOverlay" })}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default BuildModal
