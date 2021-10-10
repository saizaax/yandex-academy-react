import React from "react"
import Link from "next/link"

import ButtonNext from "../components/ButtonNext/ButtonNext"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import ToolsIcon from "../icons/tools.svg"

function Start(props) {
  return (
    <div className="start-screen">
      <div className="wrapper">
        <Header title="School CI server" isSettingsButton={true} />
        <div className="instructions">
          <ToolsIcon />
          <p>Configure repository connection and synchronization settings</p>
          <Link href="/settings">
            <ButtonNext variant="primary">Open settings</ButtonNext>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Start
