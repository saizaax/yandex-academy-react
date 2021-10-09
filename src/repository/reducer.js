import data from "../mockdata.json"

export const reducer = (state, action) => {
  const BUILDS_PER_PAGE = 9

  switch (action.type) {
    case "updateSettings":
      sessionStorage.setItem("settings", JSON.stringify(action.payload))
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
          history: [...data.builds.slice(0, state.builds.page * BUILDS_PER_PAGE)],
        },
      }
    case "incrementBuildsPage":
      return {
        ...state,
        builds: {
          ...state.builds,
          page: state.builds.page + 1,
          isMore:
            (state.builds.page + 1) * BUILDS_PER_PAGE >= data.builds.length
              ? false
              : true,
        },
      }
    default:
      return state
  }
}
