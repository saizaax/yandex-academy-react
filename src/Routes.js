import { useContext } from "react"
import "./styles.scss"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import BuildHistory from "./pages/BuildHistory"
import Settings from "./pages/Settings"
import StartScreen from "./pages/StartScreen"

import { StateContext } from "./repository/StateContext"

function App() {
  const [state] = useContext(StateContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {state.settings.repository ? <BuildHistory /> : <StartScreen />}
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App
