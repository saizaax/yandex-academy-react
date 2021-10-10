import { initialState } from "./state"

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case "UPDATE_SETTINGS":
      return { ...state, settings: payload }
    case "SWITCH_OVERLAY":
      return {
        ...state,
        environment: {
          ...state.environment,
          overlay: !state.environment.overlay,
        },
      }
    case "FETCH_BUILDS":
      return {
        ...state,
        builds: {
          ...state.builds,
          history: payload,
        },
      }
    case "INCREMENT_BUILDS_PAGE":
      return {
        ...state,
        builds: {
          ...state.builds,
          page: state.builds.page + 1,
        },
      }
    case "SET_BUILDS_PAGE":
      return {
        ...state,
        builds: {
          ...state.builds,
          page: payload,
        },
      }
    case "UPDATE_IS_MORE":
      return {
        ...state,
        builds: {
          ...state.builds,
          isMore: payload,
        },
      }
    default:
      return state
  }
}

export default reducer
