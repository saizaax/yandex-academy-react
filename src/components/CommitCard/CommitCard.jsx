import React from "react"
import styles from "./CommitCard.module.scss"

import UserIcon from "../../icons/user.svg"
import CommitIcon from "../../icons/code-commit.svg"
import ClockIcon from "../../icons/stopwatch.svg"
import CalendarIcon from "../../icons/calendar.svg"

import Status from "../Status/Status"
import Meta from "../Meta/Meta"

import { formatHoursMinutes } from "../../utils/formatHoursMinutes"
import { formatBuildDate } from "../../utils/formatBuildDate"

function CommitCard(props) {
  const { number, title, variant, branch, author, commit, date, time } = props

  const iconVariant =
    variant === "warning" ? (
      <img className={styles.icon} src={"icons/clock.svg"} alt="Warning" />
    ) : variant === "error" ? (
      <img className={styles.icon} src={"icons/fail.svg"} alt="Error" />
    ) : (
      <img className={styles.icon} src={"icons/done.svg"} alt="Success" />
    )

  return (
    <div className={styles["commit-card"]}>
      <div className={styles.info}>
        {iconVariant}
        <div className={styles.commit}>
          <Status number={number} title={title} variant={variant} />
          <div className={styles.meta}>
            <Meta
              variant="primary"
              text={branch}
              info={commit}
              icon={<CommitIcon />}
            />
            <Meta variant="primary" text={author} icon={<UserIcon />} />
          </div>
        </div>
      </div>
      <div className={styles.time}>
        <Meta variant="secondary" text={formatBuildDate(date)} icon={<CalendarIcon />} />
        <Meta variant="secondary" text={formatHoursMinutes(time)} icon={<ClockIcon />} />
      </div>
    </div>
  )
}

export default CommitCard
