import React from "react"
import { Link } from "react-router-dom"

import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import toolsIcon from "../icons/tools.svg"

function StartScreen(props) {
  return (
    <div className="start-screen">
      <div className="wrapper">
        <Header title="School CI server" isSettingsButton={true} />
        <div className="instructions">
          <img src={toolsIcon} alt="" />
          <p>Configure repository connection and synchronization settings</p>
          <Link to="/settings"><Button variant="primary">Open settings</Button></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StartScreen
