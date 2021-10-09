import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"

import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Input from "../components/Input/Input"
import ErrorCard from "../components/ErrorCard/ErrorCard"

import * as actions from "../repository/actions"

function Settings(props) {
  const history = useHistory()
  const dispatch = useDispatch()

  const settings = useSelector((store) => store.settings)

  const [repository, setRepository] = useState(settings.repository)
  const [command, setCommand] = useState(settings.command)
  const [branch, setBranch] = useState(settings.branch)
  const [syncInterval, setSyncInterval] = useState(settings.syncInterval)

  const [isRepoValid, setIsRepoValid] = useState(repository ? true : false)
  const [isCommandValid, setIsCommandValid] = useState(command ? true : false)
  const [isBranchValid, setIsBranchValid] = useState(true)
  const [isIntervalValid, setIsIntervalValid] = useState(true)
  const [isFormValid, setIsFormValid] = useState(
    isRepoValid && isCommandValid && isBranchValid && isIntervalValid
  )

  const [isButtonActive, setIsButtonActive] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isRepoValid && isCommandValid && isBranchValid && isIntervalValid) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isRepoValid, isCommandValid, isBranchValid, isIntervalValid])

  const cloneRepo = async () => {
    setIsButtonActive(false)

    const result = await new Promise((res) => {
      setTimeout(() => res(Math.random() > 0.4), 1500)
    })

    setIsButtonActive(true)

    if (result) {
      const data = { repository, command, branch, syncInterval }

      sessionStorage.setItem("settings", JSON.stringify(data))
      dispatch(actions.updateSettings(data))
      dispatch(actions.setBuildPage(1))

      history.push("/")
    } else {
      setIsError(true)
    }
  }

  return (
    <div className="settings">
      <div className="wrapper">
        <Header title="School CI server" />
        <div className="configuration">
          <h3>Settings</h3>
          <p>Configure repository connection and synchronization settings.</p>

          <div className="inputs">
            <Input
              label="GitHub repository"
              placeholder="user-name/repo-name"
              isRequired={true}
              value={repository}
              setValue={setRepository}
              validateRegex={/^([a-zA-Z0-9]{1,39}\/[a-zA-Z0-9-]+(\s+)?)$/}
              setValid={setIsRepoValid}
            />

            <Input
              label="Build command"
              placeholder="npm ci && npm run build"
              isRequired={true}
              value={command}
              setValue={setCommand}
              validateRegex={/^([^0-9,]*)$/}
              setValid={setIsCommandValid}
            />

            <Input
              label="Main branch"
              placeholder="master |"
              value={branch}
              setValue={setBranch}
              validateRegex={/^(([a-zA-z0-9]+\s?\|?\s?)+)$|^$|\s+/}
              setValid={setIsBranchValid}
            />

            <Input
              variant="small"
              type="number"
              label="Synchronize every"
              labelValue="minutes"
              placeholder="10"
              value={syncInterval}
              setValue={setSyncInterval}
              validateRegex={/^[+]?\d{1,3}([.]\d{1,3})?$|^$|\s+/}
              setValid={setIsIntervalValid}
            />
          </div>

          {isError ? (
            <ErrorCard>При клонировании репозитория произошла ошибка</ErrorCard>
          ) : null}

          <div className="buttons">
            <Button
              variant={isButtonActive && isFormValid ? "primary" : "disabled"}
              onClick={() => cloneRepo()}
            >
              Save
            </Button>
            <Button
              variant={isButtonActive ? "secondary" : "disabled"}
              onClick={() =>
                history.action !== "POP" ? history.goBack() : history.push("/")
              }
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Settings
