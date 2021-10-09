import "./styles.scss"
import Routes from "./Routes"

import { Provider } from "react-redux"
import store from "./repository/reducer"

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
