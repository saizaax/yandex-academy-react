import React from "react"

import RepoHeader from "../components/RepoHeader/RepoHeader"
import CommitCard from "../components/CommitCard/CommitCard"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"

function BuildHistory(props) {
  return (
    <div className="build-history">
      <div className="wrapper">
        <RepoHeader title="philip1967/my-awesome-repo" />
        <div className="commits">
          
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="error"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="warning"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="error"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />
          <CommitCard
            variant="success"
            number={1337}
            title="add documentation for postgres scaler"
            author="Philip Kirkorov"
            branch="master"
            commit="9c9f0b9"
            date="21 янв, 03:06"
            time="1 ч 20 мин"
          />

          <Button variant="regular">Show more</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BuildHistory
