import { useMemo } from "react"
import { createStore } from "redux"
import reducer from "./reducer"

let store

function initStore(initialState) {
  return createStore(reducer, initialState)
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    store = undefined
  }

  if (typeof window === "undefined") return _store

  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
