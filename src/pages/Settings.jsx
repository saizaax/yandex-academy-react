import React, { useState } from "react"

import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Input from "../components/Input/Input"

function Settings(props) {
  const [repository, setRepository] = useState("")
  const [command, setCommand] = useState("npm ci && npm run build")
  const [branch, setBranch] = useState("master |")
  const [syncInterval, setSyncInterval] = useState(10)

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
            />

            <Input
              label="Build command"
              placeholder="npm ci && npm run build"
              isRequired={true}
              value={command}
              setValue={setCommand}
            />

            <Input
              label="Main branch"
              placeholder="master |"
              value={branch}
              setValue={setBranch}
            />

            <Input
              variant="small"
              type="number"
              label="Synchronize every"
              labelValue="minutes"
              placeholder="10"
              value={syncInterval}
              setValue={setSyncInterval}
            />
          </div>

          <div className="buttons">
            <Button variant="primary">Save</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Settings
