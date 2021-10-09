import { createContext, useReducer } from "react"
import { reducer } from "./reducer"
import { initialState } from "./state"

export const StateContext = createContext()

export function StateProvider(props) {
  const { children } = props

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}
