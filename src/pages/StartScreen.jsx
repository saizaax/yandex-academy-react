import React from "react"

import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import toolsIcon from "../icons/tools.svg"

function StartScreen(props) {
  return (
    <div className="start-screen">
      <Header title="School CI server" />
      <div className="instructions">
        <img src={toolsIcon} alt="" />
        <p>Configure repository connection and synchronization settings</p>
        <Button variant="primary">Open settings</Button>
      </div>
      <Footer />
    </div>
  )
}

export default StartScreen
