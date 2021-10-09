import React, { useContext, useEffect } from "react"

import RepoHeader from "../components/RepoHeader/RepoHeader"
import CommitCard from "../components/CommitCard/CommitCard"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"
import ShadowOverlay from "../components/ShadowOverlay/ShadowOverlay"
import BuildModal from "../components/BuildModal/BuildModal"

import { StateContext } from "../repository/StateContext"

import mockData from "../mockdata.json"
import { BUILDS_PER_PAGE } from "../config"

function BuildHistory(props) {
  const [state, dispatch] = useContext(StateContext)

  useEffect(() => {
    const data = [
      ...mockData.builds.slice(0, state.builds.page * BUILDS_PER_PAGE),
    ]
    dispatch({ type: "fetchBuilds", payload: data })

    const isMore =
      state.builds.page * BUILDS_PER_PAGE >= mockData.builds.length ? false : true

    dispatch("updateIsMore", isMore)
  }, [dispatch, state.builds.page])

  return (
    <>
      <div className="build-history">
        <div className="wrapper">
          <RepoHeader title={state.settings.repository} />
          <div className="commits">
            {state.builds.history.map((build) => (
              <CommitCard
                key={build.hashPreview}
                variant={build.status}
                number={build.id}
                title={build.comment}
                author={build.author}
                branch={build.branch}
                commit={build.hashPreview}
                date={build.timestamp}
                time={build.syncMinutes}
              />
            ))}
            {state.builds.isMore ? (
              <Button
                variant="regular"
                onClick={() => dispatch({ type: "incrementBuildsPage" })}
              >
                Show more
              </Button>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
      {state.environment.overlay ? (
        <ShadowOverlay modal={<BuildModal />} />
      ) : null}
    </>
  )
}

export default BuildHistory
