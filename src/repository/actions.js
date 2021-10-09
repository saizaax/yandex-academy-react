import * as constants from "./constants"

export const switchOverlay = () => ({ type: constants.SWITCH_OVERLAY })

export const fetchBuilds = (payload) => ({
  type: constants.FETCH_BUILDS,
  payload: payload,
})

export const updateIsMore = (payload) => ({
  type: constants.UPDATE_IS_MORE,
  payload: payload,
})

export const incrementBuildsPage = () => ({
  type: constants.INCREMENT_BUILDS_PAGE,
})

export const updateSettings = (payload) => ({
  type: constants.UPDATE_SETTINGS,
  payload: payload,
})

export const setBuildPage = (payload) => ({
  type: constants.SET_BUILDS_PAGE,
  payload: payload
})