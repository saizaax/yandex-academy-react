import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import RepoHeader from "../components/RepoHeader/RepoHeader"
import CommitCard from "../components/CommitCard/CommitCard"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"
import ShadowOverlay from "../components/ShadowOverlay/ShadowOverlay"
import BuildModal from "../components/BuildModal/BuildModal"

import mockData from "../mockdata.json"
import { BUILDS_PER_PAGE } from "../config"

import * as actions from "../repository/actions"

function BuildHistory(props) {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)

  useEffect(() => {
    const data = [
      ...mockData.builds.slice(0, store.builds.page * BUILDS_PER_PAGE),
    ]
    dispatch(actions.fetchBuilds(data))

    const isMore =
      store.builds.page * BUILDS_PER_PAGE >= mockData.builds.length
        ? false
        : true

    dispatch(actions.updateIsMore(isMore))
  }, [dispatch, store.builds.page])

  return (
    <>
      <div className="build-history">
        <div className="wrapper">
          <RepoHeader title={store.settings.repository} />
          <div className="commits">
            {store.builds.history.map((build) => (
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
            {store.builds.isMore ? (
              <Button
                variant="regular"
                onClick={() => dispatch(actions.incrementBuildsPage())}
              >
                Show more
              </Button>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
      {store.environment.overlay ? (
        <ShadowOverlay modal={<BuildModal />} />
      ) : null}
    </>
  )
}

export default BuildHistory
