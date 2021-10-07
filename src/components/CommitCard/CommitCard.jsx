import React from "react"
import styles from "./CommitCard.module.scss"

import successIcon from "../../icons/done.svg"
import errorIcon from "../../icons/fail.svg"
import warningIcon from "../../icons/clock.svg"

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
      <img className={styles.icon} src={warningIcon} alt="Warning" />
    ) : variant === "error" ? (
      <img className={styles.icon} src={errorIcon} alt="Error" />
    ) : (
      <img className={styles.icon} src={successIcon} alt="Success" />
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
