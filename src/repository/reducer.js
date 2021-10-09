export const reducer = (state, action) => {
  switch (action.type) {
    case "updateSettings":
      return { ...state, settings: action.payload }
    case "switchOverlay":
      return {
        ...state,
        environment: {
          ...state.environment,
          overlay: !state.environment.overlay,
        },
      }
    case "fetchBuilds":
      return {
        ...state,
        builds: {
          ...state.builds,
          history: action.payload,
        },
      }
    case "incrementBuildsPage":
      return {
        ...state,
        builds: {
          ...state.builds,
          page: state.builds.page + 1,
        },
      }
    case "updateIsMore":
      return {
        ...state,
        builds: {
          ...state.builds,
          isMore: action.payload,
        },
      }
    default:
      return state
  }
}
