import "../styles.scss"
import { Provider } from "react-redux"
import { useStore } from "../repository/store"
import { initialState } from "../repository/state"

function App({ Component, pageProps }) {
  const store = useStore(initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App