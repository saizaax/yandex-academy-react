import { useSelector } from "react-redux"
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

function App() {
  const settings = useSelector((store) => store.settings)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {settings.repository ? <BuildHistory /> : <StartScreen />}
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
