import React from "react"
import styles from "./CommitCard.module.scss"

import { ReactComponent as SuccessIcon } from "../../icons/done.svg"
import { ReactComponent as ErrorIcon } from "../../icons/fail.svg"
import { ReactComponent as WarningIcon } from "../../icons/clock.svg"

import { ReactComponent as UserIcon } from "../../icons/user.svg"
import { ReactComponent as CommitIcon } from "../../icons/code-commit.svg"
import { ReactComponent as ClockIcon } from "../../icons/stopwatch.svg"
import { ReactComponent as CalendarIcon } from "../../icons/calendar.svg"

import Status from "../Status/Status"
import Meta from "../Meta/Meta"

function CommitCard(props) {
  const { number, title, variant, branch, author, commit, date, time } = props

  const iconVariant =
    variant === "warning" ? (
      <WarningIcon className={styles["status-icon"]} />
    ) : variant === "error" ? (
      <ErrorIcon className={styles["status-icon"]} />
    ) : (
      <SuccessIcon className={styles["status-icon"]} />
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
        <Meta variant="secondary" text={date} icon={<CalendarIcon />} />
        <Meta variant="secondary" text={time} icon={<ClockIcon />} />
      </div>
    </div>
  )
}

export default CommitCard
