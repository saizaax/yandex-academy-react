import "./styles.scss"
import Routes from "./Routes"

import { StateProvider } from "./repository/StateContext"

function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  )
}

export default App
