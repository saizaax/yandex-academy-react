import React from "react"
import styles from "./Footer.module.scss"

function Footer(props) {
  const mockupLink = "https://example.com/"

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href={mockupLink}>Support</a>
        <a href={mockupLink}>Learning</a>
        <a href={mockupLink}>Русская версия</a>
      </div>
      <p>© 2021 Your Name</p>
    </footer>
  )
}

export default Footer