import React from "react"
import styles from "./Footer.module.scss"

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Support</a>
        <a href="#">Learning</a>
        <a href="#">Русская версия</a>
      </div>
      <p>© 2021 Your Name</p>
    </footer>
  )
}

export default Footer